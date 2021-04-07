## README

- [English](README.md)
- [Русский](README-ru.md)

## Project tree

```bash
tree --charset ascii
```

```
.
|-- README*.md          // Information file
|-- docker-compose.yml  // Docker configuration
|-- rep
|   `-- B
|       `-- B.pdf       // Compiled PDF
`-- src                 // Source code
```

## Compile PDF

Docker must be installed.

```bash
sudo docker-compose run latex /bin/bash
```

As soon as the virtual machine is started, go to the directory with the `B.tex` file:

```bash
cd /content/rep/B
```

Compile the `B.tex` file:

```bash
pdflatex B.tex
```

The second time we compile the file `B.tex`, so that the links in the document work correctly:

```bash
pdflatex B.tex
```

The compiled `B.pdf` file in the `rep/B` folder along with the `B.tex` file.

```bash
tree --charset ascii
```

```
.
`-- rep
    `-- B
        |-- B.tex
        `-- B.pdf
```
