/* =========================================================
   PETUALANGAN PYTHAGORAS — KONFIGURASI AUDIO TERPUSAT
   ---------------------------------------------------------
   Cara menambah audio baru:
   1. Letakkan file di folder assets/audio/<kategori>/ (mp3/wav/ogg/m4a).
   2. Pada daftar `tracks` di bawah, isi `file` dengan nama file Anda
      lalu ubah `available: false` menjadi `available: true`.
   3. Selesai. Tidak perlu membangun ulang game.

   Status:
   - available: true  -> file ada dan akan dimuat. Jika ternyata gagal
                         dimuat, aplikasi otomatis menonaktifkannya.
   - available: false -> file belum diunggah. Tidak ada permintaan jaringan.
                         Efek suara memakai `synth` (nada sintetis bawaan
                         Web Audio) bila ada; musik/suara/narasi dilewati.
   ========================================================= */
window.PP_AUDIO_CONFIG = {
  basePath: 'assets/audio/',

  // Pengali volume per kategori (dikalikan dengan slider pengguna)
  categories: {
    bgm:       { channel: 'music',     gain: 1.0 },
    character: { channel: 'narration', gain: 1.0 },
    narration: { channel: 'narration', gain: 1.0 },
    sfx:       { channel: 'sfx',       gain: 1.0 },
    quiz:      { channel: 'sfx',       gain: 1.0 },
    mission:   { channel: 'sfx',       gain: 1.0 },
    victory:   { channel: 'sfx',       gain: 1.0 }
  },

  tracks: {
    /* ---------- MUSIK LATAR (file asli dari guru) ---------- */
    bgm_main_theme: { file: 'bgm/bgm_main_theme.mp3', category: 'bgm', loop: true, volume: 0.70, available: true,
                      source: '01_Title.mp3', use: 'Halaman pembuka, profil, petunjuk, dan FINISH' },
    bgm_adventure:  { file: 'bgm/bgm_adventure.mp3',  category: 'bgm', loop: true, volume: 0.70, available: true,
                      source: '02_Spring.mp3', use: 'Peta petualangan dan kartu pos' },
    bgm_learning:   { file: 'bgm/bgm_learning.mp3',   category: 'bgm', loop: true, volume: 0.55, available: true,
                      source: '19_Town.mp3', use: 'Menu utama, tujuan, materi, video, eksplorasi, refleksi, penilaian' },
    bgm_game:       { file: 'bgm/bgm_game.mp3',       category: 'bgm', loop: true, volume: 0.55, available: true,
                      source: '12_Minigame_1.mp3', use: 'Game A, Game B, dan kuis (volume lebih rendah)' },
    bgm_race:       { file: 'bgm/bgm_race.mp3',       category: 'bgm', loop: true, volume: 0.55, available: true,
                      source: '13_Minigame_2_Race.mp3', use: 'Game C (Misi Jembatan) dan Game D (Tantangan Akhir)' },

    /* ---------- SUARA KARAKTER (belum diunggah) ---------- */
    character_greeting: { file: 'character/character_greeting.mp3', category: 'character', volume: 1, available: false, use: 'Sapaan karakter di halaman pembuka' },
    character_mission:  { file: 'character/character_mission.mp3',  category: 'character', volume: 1, available: false, use: 'Petunjuk saat memasuki misi' },
    character_praise:   { file: 'character/character_praise.mp3',   category: 'character', volume: 1, available: false, use: 'Pujian saat misi selesai' },
    character_retry:    { file: 'character/character_retry.mp3',    category: 'character', volume: 1, available: false, use: 'Semangat saat jawaban salah' },

    /* ---------- NARASI MATERI (belum diunggah) ---------- */
    narration_materi_1: { file: 'narration/narration_materi_1.mp3', category: 'narration', volume: 1, available: false, use: 'Narasi Materi 1: Segitiga siku-siku' },
    narration_materi_2: { file: 'narration/narration_materi_2.mp3', category: 'narration', volume: 1, available: false, use: 'Narasi Materi 2: Sisi-sisi segitiga' },
    narration_materi_3: { file: 'narration/narration_materi_3.mp3', category: 'narration', volume: 1, available: false, use: 'Narasi Materi 3: Konsep Teorema Pythagoras' },
    narration_materi_3b:{ file: 'narration/narration_materi_3b.mp3',category: 'narration', volume: 1, available: false, use: 'Narasi Pembuktian Teorema Pythagoras' },
    narration_materi_4: { file: 'narration/narration_materi_4.mp3', category: 'narration', volume: 1, available: false, use: 'Narasi Materi 4: Contoh perhitungan' },
    narration_materi_5: { file: 'narration/narration_materi_5.mp3', category: 'narration', volume: 1, available: false, use: 'Narasi Materi 5: Penerapan sehari-hari' },
    narration_materi_6: { file: 'narration/narration_materi_6.mp3', category: 'narration', volume: 1, available: false, use: 'Narasi Materi 6: Kebalikan teorema & triple' },

    /* ---------- EFEK SUARA (belum diunggah -> nada sintetis bawaan) ---------- */
    sfx_button_click:  { file: 'sfx/sfx_button_click.mp3',  category: 'sfx', volume: 0.8, available: false, synth: 'click',   use: 'Setiap tombol ditekan' },
    sfx_page_turn:     { file: 'sfx/sfx_page_turn.mp3',     category: 'sfx', volume: 0.8, available: false, synth: 'page',    use: 'Perpindahan halaman' },
    sfx_game_start:    { file: 'sfx/sfx_game_start.mp3',    category: 'sfx', volume: 0.9, available: false, synth: 'start',   use: 'Pembukaan permainan' },
    sfx_game_end:      { file: 'sfx/sfx_game_end.mp3',      category: 'sfx', volume: 0.9, available: false, synth: 'end',     use: 'Penutupan permainan' },
    sfx_select_pos:    { file: 'sfx/sfx_select_pos.mp3',    category: 'sfx', volume: 0.9, available: false, synth: 'select',  use: 'Memilih lokasi di peta' },
    sfx_point:         { file: 'sfx/sfx_point.mp3',         category: 'sfx', volume: 0.8, available: false, synth: 'point',   use: 'Mendapat poin / XP' },
    sfx_correct_answer:{ file: 'quiz/sfx_correct_answer.mp3',category: 'quiz',volume: 0.9, available: false, synth: 'correct', use: 'Jawaban benar' },
    sfx_wrong_answer:  { file: 'quiz/sfx_wrong_answer.mp3', category: 'quiz',volume: 0.9, available: false, synth: 'wrong',   use: 'Jawaban salah' },
    sfx_quiz_select:   { file: 'quiz/sfx_quiz_select.mp3',  category: 'quiz',volume: 0.7, available: false, synth: 'tick',    use: 'Memilih jawaban kuis' },
    sfx_quiz_finish:   { file: 'quiz/sfx_quiz_finish.mp3',  category: 'quiz',volume: 0.9, available: false, synth: 'end',     use: 'Kuis selesai' },
    sfx_mission_complete:{file:'mission/sfx_mission_complete.mp3',category:'mission',volume:1,available:false, synth: 'mission', use: 'Misi berhasil diselesaikan' },
    sfx_star:          { file: 'mission/sfx_star.mp3',      category: 'mission',volume: 0.9, available: false, synth: 'star',   use: 'Mendapat bintang / penghargaan' },
    sfx_victory:       { file: 'victory/sfx_victory.mp3',   category: 'victory',volume: 1.0, available: false, synth: 'victory',use: 'Musik kemenangan di FINISH' }
  },

  /* Musik latar per halaman. Perpindahan antar-halaman memakai crossfade
     dan hanya satu musik yang dimainkan pada satu waktu. */
  sceneMusic: {
    splash: 'bgm_main_theme', petunjuk: 'bgm_main_theme', profil: 'bgm_main_theme', finish: 'bgm_main_theme',
    menu: 'bgm_learning', tujuan: 'bgm_learning', materi: 'bgm_learning', video: 'bgm_learning',
    eksplorasi: 'bgm_learning', refleksi: 'bgm_learning', nilai: 'bgm_learning',
    peta: 'bgm_adventure', pos: 'bgm_adventure',
    games: 'bgm_game', 'game-A': 'bgm_game', 'game-B': 'bgm_game',
    'game-C': 'bgm_race', 'game-D': 'bgm_race',
    kuis: 'bgm_game'
  },
  // Pengali volume musik pada halaman tertentu (kuis dibuat lebih pelan)
  sceneGain: { kuis: 0.6 },

  /* Peristiwa -> trek efek suara */
  events: {
    click: 'sfx_button_click', page: 'sfx_page_turn', start: 'sfx_game_start', end: 'sfx_game_end',
    selectPos: 'sfx_select_pos', point: 'sfx_point', correct: 'sfx_correct_answer', wrong: 'sfx_wrong_answer',
    quizSelect: 'sfx_quiz_select', quizFinish: 'sfx_quiz_finish', mission: 'sfx_mission_complete',
    star: 'sfx_star', victory: 'sfx_victory'
  }
};
