## README

- [English](README.md)
- [Русский](README-ru.md)

## Project tree

```bash
tree --charset ascii -I "node_modules"
```

```
.
|-- README*.md          // Information file
|-- assets              // Folder with assets
|-- css                 // Folder with styles
|-- docker-compose.yml  // Docker settings
|-- js                  // Scripts folder
|-- lib                 // Library folder
`-- package.json        // File with package versions 
```

## Install packages (1 time)

```bash
sudo docker-compose up install
```

## Server start

```bash
sudo docker-compose run serve
```
