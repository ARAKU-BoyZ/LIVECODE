# -Live-Code-React-Js

## RULES

1. **Untuk kampus remote**: **WAJIB** melakukan **share screen** (**DESKTOP/ENTIRE SCREEN**) dan **unmute microphone** ketika Live Code berjalan (tidak melakukan share screen/salah screen atau tidak unmute microphone akan di ingatkan).
1. Kerjakan secara individu. Segala bentuk kecurangan (mencontek ataupun diskusi) akan menyebabkan skor live code ini 0.
1. Kerjakan pada file JavaScript (\*.js) yang telah disediakan.
1. Waktu pengerjaan:
   - **120 menit** untuk **3 soal**.
1. **Pada text editor hanya ada file yang terdapat pada repository ini**.
1. Membuka referensi eksternal seperti Google, StackOverflow, dan MDN diperbolehkan.
1. Dilarang membuka repository di organisasi tugas, baik pada organisasi batch sendiri ataupun batch lain, baik branch sendiri maupun branch orang lain (**setelah melakukan clone, close tab GitHub pada web browser kalian**).
1. Lakukan `git push origin <branch-name>` dan create pull request **hanya jika waktu Live Code telah usai (bukan ketika kalian sudah selesai mengerjakan)**. Tuliskan nama lengkap kalian saat membuat pull request dan assign buddy.
1. **Penilaian berbasis logika dan hasil akhir**. Pastikan keduanya sudah benar.

## Notes

- Live code ini memiliki testing. Pastikan telah mengeksekusi command `npm install` sebelum melakukan test. Command line untuk test adalah `npm test -- <nama_file>`.

  | Soal | Command            | Max Score |
  | ---- | ------------------ | --------- |
  | 1    | `npm test -- 1.js` | 22        |
  | 2    | `npm test -- 2.js` | 30        |
  | 3    | `npm test -- 3.js` | 48        |

- Built-in functions yang tidak dilarang oleh RULES:
  - Basic primitive data types: `Number()`, `String()`, `Boolean()`
  - Informatives: `typeof`, `.length`, `isInteger()`, `isArray()`, `isNaN()`
  - Maths: `Math.floor()`, `Math.round()`, `Math.ceil()`, `Math.abs()`, `Math.sqrt()`, `Math.random()`
  - Strings: `toString()`, `toUpperCase()`, `toLowerCase()`, `parseInt()`
  - Object: `Object.keys()`, `Object.values()`
  - Array: `push()`
