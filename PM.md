# Pm för webbshop och api.
Leo Gabrielsson
2023-10-24
#

## Vad var updraget?
Uppdraget var att med hjälp av React och Prisma skapa en front och backend för en webbshop med temat djurkläder.

Frontend designen skulle vara skapade individuellt medan backenden skulle vara skapad gemensamt i grupper om tre.

Min frontend ligger i detta repo medans min grupps gemensamma backend repo ligger här:<br>
| https://github.com/TE4-Umea/te4-shop-api |
## Hur löste vi/jag det?
### Landing page och allmän layout/färger
![Part 1 of laningpage. Includes hero and navbar](/src/imgs/pmImgs/landing1.png "Part 1 of laningpage. Includes hero and navbar")
![Part 2 of laningpage. Includes bestsellers](/src/imgs/pmImgs/landing2.png "Part 2 of laningpage. Includes bestsellers")
![Part 3 of laningpage. Includes generall info and footer](/src/imgs/pmImgs/landing3.png "Part 3 of laningpage. Includes generall info and footer")
Jag skapade frontend designen själv. Jag började med att kolla på liknande hemsidor först och mentalt dokumenterade vad jag gillade/ogillade med dem. Exempelvis gillade jag när hemsidorna använde en stor hero med en lockande text och bakgrund. Sedan valde jag att använda standard centrering av innehållet på sidan.


Vad gäller färgschema så valde jag genom att först ta färg från naturen (grön) och öka färgenmättnaden för att få sidan att vara mer lekfull. Denna färg tog jag som huvudfärg för sidan. Sedan baserade jag resten av färgerna på den moderna och stilrena designen på majoriteten av hemsidor (Vitt, lätt grå och mörk grå). Sedan gällde vad jag anser är standard färggivning. Navbaren fick sidans "primära" färg, footern fick en mörkgrå färg. Bakgrunden gjorde jag lätt ljusgrå med en aningen mörkare grå för att få kontrast för läsbarhet.

### Products page
![Products page. Includes all products that are for sale](/src/imgs/pmImgs/products1.png "Products page")
Products page:en ska, som väntat, visa produkterna i shoppen. Detta sker genom att koppla sidan med en databas och sedan köra en map function för att sidan att spotta ut data från databasen.
```
async function fetchProducts() {
    await fetch(`http://localhost:3000/product`)
        .then(res => res.json())
        .then(result => {
            console.log(result)
            setProducts(result.data)
        }).catch(err => {
            console.log(err)
        });
}
```
Koden ovan visar kopplingen till databasen och koden nedan visar map funktion. Den svarar med "Problem loading products..." om den inte får svar från databasen.
```
<ul>
    {products.length > 0 ? (
        <>
            {products.map((item) => (
                <ProductCard
                    key={item.id}
                    id={item.id}
                    img={item.image}
                    name={item.name}
                    price={item.price}
                />
            ))}
        </>
    ) :
        <p>Problem loading products...</p>
    }
</ul>
```
### Cart page
![Cart page. Includes all items added to the cart and a checkout button](/src/imgs/pmImgs/cart1.png "Products page")
Carten har bara placeholder items för tillfället ty jag hann inte fixa den delen. Annars skulle den involvera inläsningen av data från useContext och map för att läsa in vilka producter som skulle handlas.

## Vad gick bra?
Layout och skapandet av färgschemat gick bra. CSS för layout var inte något speciellt att applicera. Jag kommer att ta med mig "flex variablerna" till framtida projekt då jag tycker att de verklgen hjälpte till med att göra hemsidan läsbar på primärt mobila enheter. Jag baserade dessa på variablerna som används på "Build exellent websites" av Andy Bell. | https://buildexcellentwebsit.es |
Den sidan använder sig i sin tur av CSS generatorerna på sidan "Utopia". | https://utopia.fyi |

## Vad gick mindre bra
Det som var mindre bra var applicationen av färgschemat. I teori så skulle schemat uppfylla målen jag gav den (Ge sidan ett modernt men lite lekfullt uttryck) men i praktik så använde jag den gröna färgen för mycket. Det gav sidan för mycket lek känsla så att den slutade förmedla sin mer seriösa sida. I framtiden ska jag i dessa fall hålla mig till att använda mer neutrala färger för majoriten av sidan och behålla den valda mättade färgen till små saker så som navbaren.