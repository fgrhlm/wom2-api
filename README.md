## Projekt 1 - Stugmäklaren
### Webbtjänster och molnteknologi 21

## Kör projektet

### Production
Prodcontainern är helt "statisk". Alltså inga volymer som mountas osv.

```
docker-compose --profile prod up -d
```

### Dev
I devcontainern mountas ``` app/ ``` som en volym.
Måste installera paket lokalt för att detta skall funka eftersom ingen npm install körs i containern.
```
docker-compose --profile dev up -d
```