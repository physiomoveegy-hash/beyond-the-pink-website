# Background music

The track is served locally from /audio/hopeful.mp3 (MPEG Layer III, 256 kbps, 44.1 kHz, 2.8 MB).

Google Drive was removed because it returns HTTP 403 when the browser's audio element sends cross-origin headers (Sec-Fetch-Dest: audio, Sec-Fetch-Mode: cors), blocking playback entirely.

Playback begins only when the visitor taps Begin My Journey, stays active across screen navigation, loops at low volume, and retains the existing Play/Pause and Mute controls.
