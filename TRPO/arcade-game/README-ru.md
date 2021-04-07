## README

- [English](README.md)
- [Русский](README-ru.md)

## Дерево проекта

```bash
tree --charset ascii -I "node_modules"
```

```
.
|-- README*.md          // Файл с информацией
|-- assets              // Папка с ресурсами
|-- css                 // Папка со стилями
|-- docker-compose.yml  // Настройки Docker
|-- js                  // Папка скриптов
|-- lib                 // Папка с библиотеками
`-- package.json        // Файл с версиями пакетов
```

## Установка пакетов (1 раз)

```bash
sudo docker-compose up install
```

## Запуск сервера

```bash
sudo docker-compose run serve
```
