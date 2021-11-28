# Ciphering CLI Tool

## For use CLI tool that will encode and decode a text by 3 substitution ciphers:

- make sure that the computer has Node.js LTS version upper 12.13.0

```bash
$ node -v
```

- go to `ciphering-cli-tool` directory:

```bash
$ cd ciphering-cli-tool
```

- run cli tool with correct arguments (see below):

```bash
$ node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```

CLI tool can accept 3 options:

1.  **-c, --config**: config for ciphers
    Config is a string with pattern `{XY(-)}n`, where:

- `X` is a cipher mark:
  - `C` is for Caesar cipher (with shift 1)
  - `A` is for Atbash cipher
  - `R` is for ROT-8 cipher
- `Y` is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
  - `1` is for encoding
  - `0` is for decoding

2.  **-i, --input**: a path to input file
3.  **-o, --output**: a path to output file
