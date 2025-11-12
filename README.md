# IPA Keyboard Layout

This project aims to (1) define a keyboard spec (2) explain the rationale behind
the design.

Design principles:

- first and foremost, key commands for an IPA symbol should have _phonetic
    grounding_
    - e.g. /ʃ/ is retracted ([+ant]) /s/
    - e.g. /ɰ/ is the semi-vowel of /ɯ/, which is unround /u/
- secondly, if typographical cues clearly outweigh complex key commands required
    to implement phonetically grounded sequence, then those should be used
    instead
    - e.g. /ʌ/ = unrounded, lowered /o/; vs /ʌ/ = turned v
    - e.g. /oe/ = rounded, lowered /e/; vs some typographical combination of o + e
- sometimes phonetic grounding and typological similarity may combine, as in the
    case of uvulars and small-cap symbols: /ʙɢʜʟʀʁ/
    - e.g. /ʀɢʁ/ are all _uvulars_ and _small-caps_
    - /ʜʟ/ while not uvular are produced at _velar_ or _radical_ major place of articulation
    - /ʙ/ is not back at all in terms of place of articulation, but
        typographically so similar to the other small-caps characters that it
        will take on the same key-mapping class
    - all of /ʀɢʁʜʟʙ/ are mapped to a `q + {base}` sequence, i.e.
      {ʙɢʜʟʀʁ} = `q` + `{b, g, h, l, r, R}`
      - `q` is chosen as a _modifier_ representative of the _uvular_ keycode
          class; when combined with a _base_ such as `r`, it produces a _uvular_
          _r_-like symbol


Objectives:

- integrate with existing keyboard layouts (e.g. Dvorak, Qwerty)
- describe the IPA keyboard "spec" so that keyboard layout designers may
    integrate this into their own designs if they wish
- minimize cognitive load for linguists, language enthusiasts, hobbyists wishing
    to type IPA transcriptions
