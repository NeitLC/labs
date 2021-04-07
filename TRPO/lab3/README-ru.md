## README

- [English](README.md)
- [Русский](README-ru.md)

## Дерево проекта

```bash
tree --charset ascii
```

```
.
|-- README*.md          // Информационный файл
|-- docker-compose.yml  // Docker конфигурация
|-- rep
|   `-- B
|       `-- B.pdf       // Скомпилированный PDF
`-- src                 // Исходный код
```

## Компиляция PDF

Должен быть установлен Docker.

```bash
sudo docker-compose run latex /bin/bash
```

Как запустилась виртуальная машина, переходим в директорию с `B.tex` файлом:

```bash
cd /content/rep/B
```

Компилируем файл `B.tex`:

```bash
pdflatex B.tex
```

Второй раз компилируем файл `B.tex`, чтобы корректно работали ссылки в документе:

```bash
pdflatex B.tex
```

Скомпилированный файл `B.pdf` в папке `rep/B` вместе с `B.tex` файлом.

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
