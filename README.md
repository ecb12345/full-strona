# Instrukcja obsługi Twojej nowej strony

Gratulacje! Twoja strona internetowa została przebudowana i zoptymalizowana. Poniżej znajdziesz proste kroki, które pomogą Ci ją uruchomić i zarządzać jej treścią.

## Jak wgrać stronę na serwer?

1. Zaloguj się do swojego panelu hostingowego (np. przez FTP lub Manager Plików).
2. Otwórz folder główny swojej strony (zazwyczaj nazywa się on `public_html` lub `www`).
3. Przekopiuj do niego następujące pliki i foldery z Twojego komputera:
   - `index.html`
   - `css/` (cały folder)
   - `js/` (cały folder)
   - `images/` (cały folder)
   - `.htaccess`
   - `robots.txt`
   - `sitemap.xml`

## Jak podmienić zdjęcia na własne?

Wszystkie zdjęcia znajdują się w folderze `images/`. Aby je podmienić:
1. Przygotuj własne zdjęcie i nazwij je dokładnie tak samo, jak to, które chcesz zastąpić (np. `hero.jpg`).
2. Wgraj je do folderu `images/` na serwerze, zastępując stary plik.

**Zalecane wymiary i nazwy:**
- `hero.jpg` – Zdjęcie główne na samej górze (ok. 1920x1080px).
- `portrait.jpg` – Twoje zdjęcie w sekcji Metodologia (proporcje 4:5).
- `module-01.jpg` do `module-05.jpg` – Zdjęcia przy modułach szkoleń.
- `logo-1.svg` itd. – Logotypy klientów.

## Jak dodać kody marketingowe (np. Google Analytics)?

1. Otwórz plik `index.html` w dowolnym edytorze tekstu (np. Notatnik).
2. Znajdź fragment zakomentowany jako `<!-- WSTAW KOD GOOGLE ANALYTICS G-XXXXX TUTAJ -->`.
3. Wklej tam kod otrzymany od Google.
4. Zapisz plik i wgraj go ponownie na serwer.

## Przydatne informacje:
- **Menu mobilne:** Strona posiada przycisk menu (trzy kreski), który pojawia się na telefonach.
- **Szybkość:** Strona korzysta z nowoczesnych technologii, dzięki czemu ładuje się bardzo szybko.
- **Bezpieczeństwo:** Plik `.htaccess` automatycznie dba o bezpieczne połączenie (HTTPS).

W razie pytań, jestem do Twojej dyspozycji!
