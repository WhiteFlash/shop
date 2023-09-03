All notable changes to this project will be documented in this file.
### Task 4:
### Добавлены Pipes
- Добавлены встроеные pipes для компонента `CardComponent`
- Метод `getProducts` сервиса `ProductService` возвращает `Observable`
- Создана custom pipe `OrderByPipe` (простой вариант)
- Применена `OrderByPipe` для компонента `CardList`

### Task 2
### Added: Complete bullet 2 from task list
- Добавлены модули `Card`, `Products`, `Orders`, `Shared`
- Добавлены `ProductComponent`, `ProductListComponent` и т.д.
- Реализована логика сервиса для обработки данных в корзине

### Added: Работа над ошибками
- Удалёно `_` для переменной `productService` из `ProductListComponent`.
- Добавлены строковые значения для enum файл `src/app/task1/models/product.ts`
- Удалён `src/app/task1/services/converter.service.ts`, добавлена `Pipe` => `YesNoPipe` 

### Task 1
### Added: Complete bullet 6 from task list
- Added `CardListComponent`
- Added `CardComponent`

### Added: Complete bullet 6 from task list
- Added `ProductListComponent`
- Added `ProductComponent`
- Added `ProductService`

### Added: Completed bullet 4 from tasks list
- Added `FirstComponent`
- Added `Task1` module
- Added enum and related entites for component
- Displayed entities on the view
- Styled component with bootstrap
