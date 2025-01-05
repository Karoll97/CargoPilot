# CargoPilot

CargoPilot to nowoczesny system zarządzania flotą i śledzenia ładunków.

## Instalacja

```bash
# Instalacja zależności
pnpm install

# Uruchomienie w trybie deweloperskim
pnpm run dev

# Budowanie projektu
pnpm run build
```

## Struktura projektu

```
/src
  /components
    /ui - komponenty shadcn/ui
    /layout - komponenty układu strony (Navbar, Sidebar)
    /vehicles - komponenty związane z pojazdami
      /forms - formularze
      /details - szczegóły pojazdów
    /orders - komponenty związane ze zleceniami
      /views - widoki list i zestawień
      /details - szczegóły zleceń
  /pages - strony aplikacji
  /utils - funkcje pomocnicze
  /styles - style globalne
```

## Technologie

- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- Vite
- React Router Dom
- Recharts

## Funkcjonalności

- ✅ Zarządzanie pojazdami (dodawanie, edycja, podgląd)
- ✅ Zarządzanie zleceniami transportowymi
- ✅ System dokumentów i załączników
- ✅ Śledzenie statusów i historii
- ✅ Statystyki i raporty

## Rozwój projektu

Projekt jest w aktywnym rozwoju. Planowane funkcjonalności:

- [ ] System powiadomień
- [ ] Integracja z mapami
- [ ] Aplikacja mobilna dla kierowców
- [ ] Moduł rozliczeń i fakturowania
