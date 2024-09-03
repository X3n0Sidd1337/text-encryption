document.getElementById('encryptBtn').addEventListener('click', function () {
    const plaintext = document.getElementById('plaintext').value;
    if (plaintext.trim() === "") {
        alert("Please enter some text to encrypt.");
        return;
    }
    const key = CryptoJS.lib.WordArray.random(128 / 8).toString();
    const encrypted = CryptoJS.AES.encrypt(plaintext, key).toString();
    document.getElementById('result').value = `Key: ${key}\nEncrypted: ${encrypted}`;
});
document.getElementById('decryptBtn').addEventListener('click', function () {
    const encryptedText = document.getElementById('plaintext').value;
    if (encryptedText.trim() === "") {
        alert("Please enter the encrypted text to decrypt.");
        return;
    }
    const key = prompt("Enter the key used for encryption:");
    if (!key) {
        alert("Decryption key is required!");
        return;
    }
    try {
        const decrypted = CryptoJS.AES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
        if (decrypted) {
            document.getElementById('result').value = `Decrypted: ${decrypted}`;
        } else {
            document.getElementById('result').value = "Decryption failed. Check the key and the encrypted text.";
        }
    } catch (e) {
        document.getElementById('result').value = "Decryption error!";
    }
});
