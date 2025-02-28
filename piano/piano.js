document.addEventListener("DOMContentLoaded", () => {
    const keys = document.querySelectorAll(".key");
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    let instrument = "sine"; // Domyślnie pianino
    let volume = 1; // Głośność domyślna
    let recordingTime = 2; // Czas nagrywania domyślny (w sekundach)
    let recordedBuffer = null; // Bufor nagranego dźwięku
    let isRecording = false;
    let timerInterval = null;

    // 🎵 Mapowanie klawiszy QWERTY na częstotliwości
    const keyMap = {
        "1": 0, "2": 1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6, "8": 7, "9": 8, "0": 9,
        "q": 10, "w": 11, "e": 12, "r": 13, "t": 14, "y": 15, "u": 16, "i": 17, "o": 18, "p": 19,
        "a": 20, "s": 21, "d": 22, "f": 23, "g": 24, "h": 25, "j": 26, "k": 27, "l": 28, "z": 29, "x": 30
    };

    function getFrequency(index) {
        return 440 * Math.pow(2, (index - 9) / 12); // Standardowe A440
    }

    function playSound(index) {
        if (recordedBuffer && !isRecording) {
            playRecordedSound(index); // Jeśli mamy nagranie, gramy nagrany dźwięk
        } else if (!isRecording) {
            playSynthSound(index); // Inaczej gramy syntetyczny dźwięk
        }
    }

    function playSynthSound(index) {
        const osc = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        osc.type = instrument;
        osc.frequency.value = getFrequency(index);
        gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
        osc.connect(gainNode);
        gainNode.connect(audioContext.destination);
        osc.start();
        osc.stop(audioContext.currentTime + 0.3); // Dźwięk trwa 0.3 sekundy
    }

    function playRecordedSound(index) {
        const source = audioContext.createBufferSource();
        source.buffer = recordedBuffer;
        source.playbackRate.value = Math.pow(2, (index - 9) / 12); // Pitch shifting
        source.connect(audioContext.destination);
        source.start();
    }

    // Obsługa klawiszy na ekranie
    keys.forEach(key => {
        key.addEventListener("click", () => {
            const keyVal = key.getAttribute("data-key");
            const index = keyMap[keyVal];
            key.classList.add("active");
            playSound(index);
            setTimeout(() => key.classList.remove("active"), 100);
        });
    });

    // Obsługa klawiszy QWERTY
    document.addEventListener("keydown", (e) => {
        if (keyMap[e.key]) {  // Jeśli klawisz istnieje w mapie
            const index = keyMap[e.key];  // Pobieramy indeks z mapy klawiszy
            const key = document.querySelector(`.key[data-key="${e.key}"]`);
            if (key) {
                key.classList.add("active");
            }
            playSound(index);  // Odtwarzamy dźwięk
        }
    });

    document.addEventListener("keyup", (e) => {
        const key = document.querySelector(`.key[data-key="${e.key}"]`);
        if (key) {
            key.classList.remove("active");
        }
    });

    // Zmieniamy instrument
    document.getElementById("instrumentSelect").addEventListener("change", (e) => {
        instrument = e.target.value;
        // Jeśli wybrano opcję custom, pokazujemy przycisk nagrywania i pole zmiany czasu
        const customOptionSelected = e.target.value === 'custom';
        document.getElementById("recordButton").style.display = customOptionSelected ? 'block' : 'none';
        document.getElementById("recordingTime").parentElement.style.display = customOptionSelected ? 'block' : 'none';
        document.getElementById("timer").style.display = 'none'; // Timer ukryty na początku
    });

    // Zmieniamy głośność
    document.getElementById("volumeControl").addEventListener("input", (e) => {
        volume = e.target.value;
    });

    // Zmieniamy czas nagrywania
    document.getElementById("recordingTime").addEventListener("input", (e) => {
        recordingTime = e.target.value;
        document.getElementById("timer").textContent = `Pozostały czas: ${recordingTime}s`;
    });

    // Przycisk nagrywania
    document.getElementById("recordButton").addEventListener("click", async () => {
        if (isRecording) {
            alert("🔴 Nagrywanie już trwa!");
            return;
        }
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        const chunks = [];

        recorder.ondataavailable = event => chunks.push(event.data);
        recorder.onstop = async () => {
            const blob = new Blob(chunks, { type: "audio/wav" });
            const arrayBuffer = await blob.arrayBuffer();
            audioContext.decodeAudioData(arrayBuffer, buffer => {
                recordedBuffer = buffer;
                alert("✅ Nagranie zapisane! Teraz możesz grać własnym dźwiękiem.");
            });
        };

        isRecording = true;
        recorder.start();
        document.getElementById("timer").style.display = "block"; // Pokazujemy zegar
        let timeLeft = recordingTime;

        timerInterval = setInterval(() => {
            timeLeft--;
            document.getElementById("timer").textContent = `Pozostały czas: ${timeLeft}s`;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                recorder.stop();
                isRecording = false;
                document.getElementById("timer").style.display = "none"; // Ukrywamy timer po zakończeniu nagrywania
            }
        }, 1000); // Co sekundę aktualizujemy czas
    });

    // Początkowy stan ukrycia przycisków
    document.getElementById("recordButton").style.display = 'none';
    document.getElementById("recordingTime").parentElement.style.display = 'none';
    document.getElementById("timer").style.display = 'none'; // Timer ukryty na początku
});
