# CargoPilot

CargoPilot to nowoczesny system zarządzania flotą i śledzenia ładunków.

## 🚀 Szybki start

### Wymagania

- Node.js 18+
- pnpm (zalecane) lub npm

### Instalacja

1. Sklonuj repozytorium:
```bash
git clone https://github.com/Karoll97/CargoPilot.git
cd CargoPilot
```

2. Zainstaluj zależności:
```bash
pnpm install
```

3. Uruchom aplikację w trybie deweloperskim:
```bash
pnpm run dev
```

Aplikacja będzie dostępna pod adresem: `http://localhost:5173`

## 📁 Struktura projektu

```
/src
  /components
    /ui           # Komponenty shadcn/ui
    /layout       # Komponenty układu strony (Navbar, Sidebar)
    /vehicles     # Komponenty związane z pojazdami
      /forms     # Formularze
      /details   # Szczegóły pojazdów
    /orders      # Komponenty związane ze zleceniami
      /views     # Widoki list i zestawień
      /details   # Szczegóły zleceń
  /pages         # Strony aplikacji
  /utils         # Funkcje pomocnicze
  /styles        # Style globalne
```

## 🛠️ Technologie

- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui - System komponentów
- Vite - Build tool
- React Router Dom - Routing
- Recharts - Wykresy i wizualizacje danych

## ✨ Główne funkcjonalności

### Zarządzanie pojazdami
- ✅ Dodawanie i edycja pojazdów
- ✅ Szczegółowe informacje o pojeździe
- ✅ Historia przeglądów i ubezpieczeń
- ✅ Zarządzanie dokumentami

### Zarządzanie zleceniami
- ✅ Tworzenie i edycja zleceń
- ✅ Śledzenie statusu realizacji
- ✅ Historia zmian
- ✅ Generowanie dokumentów transportowych

### Monitoring i statystyki
- ✅ Statystyki wykorzystania floty
- ✅ Raporty kosztów
- ✅ Historia przebiegu

## 🚧 W planach

- [ ] System powiadomień
- [ ] Integracja z mapami
- [ ] Aplikacja mobilna dla kierowców
- [ ] Moduł rozliczeń i fakturowania
- [ ] Integracja z systemami zewnętrznymi

## 🤝 Współpraca

Zapraszamy do współpracy! Jeśli chcesz pomóc w rozwoju projektu:

1. Zrób fork repozytorium
2. Stwórz branch z nową funkcjonalnością (`git checkout -b feature/AmazingFeature`)
3. Zrób commit swoich zmian (`git commit -m 'Add some AmazingFeature'`)
4. Push do brancha (`git push origin feature/AmazingFeature`)
5. Otwórz Pull Request

## 📝 Licencja

Projekt jest rozpowszechniany na licencji MIT. Zobacz plik `LICENSE` po więcej informacji.
