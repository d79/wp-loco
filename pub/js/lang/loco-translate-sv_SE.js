/**
 * Loco js export: JavaScript function
 * Project: loco.po conversion
 * Release: Working copy
 * Locale: sv_SE, Swedish
 * Exported at: Tue, 20 Jan 2015 18:43:45 +0000 
 */
loco = window.loco||{}, loco.t = function( pairs ){
    
    // named plural forms
    var pluralForms = ["one","other"];
    
    // calc numeric index of a plural form (0-1)
    function pluralIndex( n ){
        return Number( n != 1 );
    }

    // expose public t() function
    return function( msgid1, msgid2, n ){
        var value = pairs[msgid1];
        // singular if no multiplier
        if( null == n ){
            n = 1;
        }
        // plurals stored as objects, e.g. { one: "" }
        if( value instanceof Object ){
            value = value[ pluralForms[ pluralIndex(n) ] || 'one' ];
        }
        return value || ( 1 === n ? msgid1 : msgid2 ) || msgid1 || '';
    };
}(
    {"Error":"Fel","Warning":"Varning","OK":{"OK":["OK","OK"]},"Permission denied":"Beh\u00f6righet saknas","Settings saved":"Inst\u00e4llningar sparade","New PO file":"Ny PO-fil","You must specify a valid locale for a new PO file":"Du m\u00e5ste ange en giltig landskod f\u00f6r en ny PO-fil","No translatable strings found":"Inga \u00f6vers\u00e4ttbara str\u00e4ngar hittades","Cannot create a PO file.":"Kunde ej skapa en PO-fil.","PO file already exists with locale %s":"PO-fil finns redan med landskod %s","PO file used as template. This will be renamed to %s on first save":"PO-fil anv\u00e4nds som mall. Den kommer att byta namn till %s n\u00e4r du v\u00e4ljer att spara","File cannot be created automatically. Fix the file permissions or use Download instead of Save":"Fil kunde ej skapas automatiskt. \u00c4ndra filr\u00e4ttigheter eller anv\u00e4nd Ladda ner ist\u00e4llet f\u00f6r Spara","%s file is empty":"%s-filen \u00e4r tom","Run Sync to update from source code":"Anv\u00e4nd Synka f\u00f6r att uppdatera fr\u00e5n k\u00e4llkoden","No strings could be extracted from source code":"Inga str\u00e4ngar kunde hittas fr\u00e5n k\u00e4llkoden","Run Sync to update from %s":"Anv\u00e4nd Synka f\u00f6r att uppdatera fr\u00e5n %s","Source code has been modified, run Sync to update POT":"K\u00e4llkod har \u00e4ndrats, anv\u00e4nd Synka f\u00f6r att uppdatera POT","POT has been modified since PO file was saved, run Sync to update":"POT har \u00e4ndrats sedan PO-filen sparades, anv\u00e4nd Synka f\u00f6r att uppdatera","Bad file path":"Ogiltig s\u00f6kv\u00e4g","Empty or invalid %s file":"Tom eller ogiltigt %s-fil","%s file has no header":"%s-filen saknar header","New template":"Ny mall","New language":"Nytt spr\u00e5k","%s%% translated":"%s%% \u00f6versatt","1 string":{"one":"1 str\u00e4ng","other":"%s str\u00e4ngar"},"%s fuzzy":"%s oklar","%s untranslated":"%s ej \u00f6versatta","Failed to compile MO file with built-in compiler":"Det gick ej att sammanst\u00e4lla MO-fil med inbyggd kompilator","Loco, Translation Management":"Loco, Translation Management","Manage translations":"Spr\u00e5kfiler","Translation options":"Inst\u00e4llningar","Loco Translate":"\u00d6vers\u00e4ttningar","Settings":"Inst\u00e4llningar","File download failed":"Nedladdning misslyckades","Unknown language":"Ok\u00e4nt spr\u00e5k","Some files not writable":"Vissa filer \u00e4r ej skrivbara","Some files missing":"Vissa filer saknas","\"%s\" folder not writable":"Mappen \"%s\" \u00e4r ej skrivbar","POT file not writable":"POT-filen \u00e4r ej skrivbar","PO file not writable":"PO-filen \u00e4r ej skrivbar","MO file not writable":"MO-filen \u00e4r ej skrivbar","MO file not found":"MO-fil hittades ej","Folder not writable":"Mappen \u00e4r ej skrivbar","Folder not found":"Mappen hittades ej","User does not have permission to manage translations":"Anv\u00e4ndaren saknar beh\u00f6righet att hantera \u00f6vers\u00e4ttningar","Failed to compile MO file with %s, check your settings":"Det gick ej sammanst\u00e4lla MO-filen med %s , kontrollera dina inst\u00e4llningar","Invalid data posted to server":"Ogiltig data skickades till servern","Package not found called %s":"Paket %s ej hittat","Web server cannot create backups in \"%s\". Fix file permissions or disable backups in settings":"Webbservern kunde ej skapa s\u00e4kerhetskopior i \"%s\". \u00c4ndra filr\u00e4ttigheter eller inaktivera s\u00e4kerhetskopior i inst\u00e4llningarna","Web server cannot create \"%s\" directory in \"%s\". Fix file permissions or create it manually.":"Webbservern kunde ej skapa mappen \"%s\" i \"%s\". \u00c4ndra filr\u00e4ttigheter eller skapa den manuellt.","Web server cannot create files in the \"%s\" directory. Fix file permissions or use the download function.":"Webbservern kunde ej skapa filer i mappen \"%s\". \u00c4ndra filr\u00e4ttigheter eller anv\u00e4nd nedladdningsfunktionen.","%s file is not writable by the web server. Fix file permissions or download and copy to \"%s\/%s\".":"%s-filen \u00e4r ej skrivbar av webbservern. \u00c4ndra filr\u00e4ttigheter eller ladda ner och kopiera till \"%s\/%s\".","Cannot create MO file":"Kunde ej skapa MO-fil","Cannot overwrite MO file":"Kunde ej skriva \u00f6ver MO-fil","Failed to write MO file":"Kunde ej skapa MO-fil","No source files in this package, nothing to sync":"Inga k\u00e4llfiler hittades till denna spr\u00e5kfil, ingenting att synkronisera","No strings could be extracted from source files":"Inga str\u00e4ngar kunde hittas fr\u00e5n k\u00e4llfiler","Unknown error":"Ok\u00e4nt fel","PO file saved":"PO-fil sparad","and MO file compiled":"och MO-fil sammanst\u00e4lld","Merged from %s":"Sammanslagen fr\u00e5n %s","Merged from source code":"Sammanslagen fr\u00e5n k\u00e4llkod","Already up to date with %s":"Redan aktuell med %s","Already up to date with source code":"Redan aktuell med k\u00e4llkod","1 new string added":{"one":"1 ny str\u00e4ng tillagd","other":"%s nya str\u00e4ngar tillagda"},"1 obsolete string removed":{"one":"1 f\u00f6r\u00e5ldrad str\u00e4ng togs bort","other":"%s f\u00f6r\u00e5ldrade str\u00e4ngar togs bort"},"Your changes will be lost if you continue without saving":"Dina \u00e4ndringar kommer att g\u00e5 f\u00f6rlorade om du forts\u00e4tter utan att spara","Source text":"K\u00e4lltext","%s translation":"%s \u00f6vers\u00e4ttning","Comments":"Kommentarer","Context":"Inneh\u00e5ll","Translation":"\u00d6vers\u00e4ttning","Packages":"Spr\u00e5kfiler","File check":"Filr\u00e4ttigheter","File system permissions for %s":"Filsystem r\u00e4ttigheter f\u00f6r %s","Back":"Tillbaka","Get help":"Hj\u00e4lp","Package details":"Beskrivning","Translations (PO)":"\u00d6vers\u00e4ttningar (PO)","Template (POT)":"Mall (POT)","File permissions":"Filr\u00e4ttigheter","Extends: %s":"","1 language":{"one":"1 spr\u00e5k","other":"%u spr\u00e5k"},"Updated":{"Updated":["Senast sparad","Uppdaterad"]},"Powered by":"Drivs av","Loco may not work as expected":"Loco kanske ej fungerar som v\u00e4ntat","Configure Loco Translate":"Konfigurera Loco Translate","Compiling MO files":"Sammanst\u00e4lla MO-filer","Use built-in MO compiler.":"Anv\u00e4nd inbyggd MO-kompilator.","Use external command:":"Anv\u00e4nd externt kommando:","Enter path to msgfmt on server":"Skriv in s\u00f6kv\u00e4g till msgfmt p\u00e5 servern","Generate hash tables":"Generera hashtabeller","Backing up PO files":"S\u00e4kerhetskopiera PO-filer","Number of backups to keep of each file:":"Antal s\u00e4kerhetskopior att beh\u00e5lla f\u00f6r varje fil:","Experimental features":"Experimentella funktioner","Enable Wordpress core translations":"Aktivera Wordpress \u00f6vers\u00e4ttningar","Save settings":"Spara inst\u00e4llningar","Template file":"Mallfil","Switch to...":"V\u00e4xla till...","never":"aldrig","Save":"Spara","Download":"Ladda ner","Sync":"Synka","Revert":"\u00c5terg\u00e5","Add":"L\u00e4gg till","Del":"Radera","Fuzzy":"Oklar","Filter translations":"S\u00f6k \u00f6vers\u00e4ttningar","Help":"Hj\u00e4lp","Initialize new translations in %s":"Skapa nya \u00f6vers\u00e4ttningar i %s","Select from common languages":"V\u00e4lj bland vanliga spr\u00e5k","or enter any language code":"eller skriv valfri landskod","create in <code>%s<\/code>":"skapa i <code>%s<\/code>","create in global languages directory":"skapa i den globala spr\u00e5k katalogen","Start translating":"B\u00f6rja \u00f6vers\u00e4tta","New version available":"Ny version tillg\u00e4nglig","Upgrade to version %s of Loco Translate":"Uppdatera till version %s av Loco Translate","Select a plugin or theme to translate":"V\u00e4lj ett till\u00e4gg eller tema att \u00f6vers\u00e4tta","Themes":"Teman","Plugins":"Till\u00e4gg","Core":"Wordpress"} 
);
