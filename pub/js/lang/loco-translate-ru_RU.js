/**
 * Loco js export: JavaScript function
 * Project: loco.js conversion
 * Release: Working copy
 * Locale: ru_RU, Russian
 * Exported at: Mon, 09 Jun 2014 18:07:31 +0100 
 */
loco = window.loco||{}, loco.t = function( pairs ){
    
    // named plural forms
    var pluralForms = ["one","few","many"];
    
    // calc numeric index of a plural form (0-2)
    function pluralIndex( n ){
        return Number( (n%10==1 && n%100!=11 ? 0 : n%10 >= 2 && n%10<=4 &&(n%100<10||n%100 >= 20)? 1 : 2) );
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
    {"Folder not found":"","No source files in this package, nothing to sync":"","Already up to date with %s":"","Already up to date with source code":"","Source text":"","%s translation":"","Comments":"","Context":"","Number of backups to keep of each file:":"","Experimental features":"","Enable Wordpress core translations":"","create in <code>%s<\/code>":"","create in global languages directory":"","Error":"\u041e\u0448\u0438\u0431\u043a\u0430","Warning":"\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435","OK":"\u041e\u041a","Permission denied":"\u0414\u043e\u0441\u0442\u0443\u043f \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u0435\u043d","Settings saved":"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b","New PO file":"\u041d\u043e\u0432\u044b\u0439 \u0420\u041e \u0444\u0430\u0439\u043b","You must specify a valid locale for a new PO file":"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0443\u044e \u043b\u043e\u043a\u0430\u043b\u044c \u0434\u043b\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0420\u041e \u0444\u0430\u0439\u043b\u0430","No translatable strings found":"\u041d\u0435 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043e \u0441\u0442\u0440\u043e\u043a \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430","Cannot create a PO file.":"\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0420\u041e \u0444\u0430\u0439\u043b","PO file already exists with locale %s":"PO \u0444\u0430\u0439\u043b \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u043b\u043e\u043a\u0430\u043b\u0438 %s","PO file used as template. This will be renamed to %s on first save":"PO \u0444\u0430\u0439\u043b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u0448\u0430\u0431\u043b\u043e\u043d. \u041e\u043d \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d \u0432 %s \u043f\u0440\u0438 \u043f\u0435\u0440\u0432\u043e\u043c \u0441\u043e\u0445\u0440\u0430\u043d\u043d\u0438\u0438.","File cannot be created automatically. Fix the file permissions or use Download instead of Save":"\u0424\u0430\u0439\u043b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0441\u043e\u0437\u0434\u0430\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438. \u0418\u0441\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430, \u0438\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0432\u043c\u0435\u0441\u0442\u043e \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c","%s file is empty":"%s \u0444\u0430\u0439\u043b \u043f\u0443\u0441\u0442","Run Sync to update from source code":"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0421\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044e \u0434\u043b\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u0437 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430","No strings could be extracted from source code":"\u041d\u0435\u0442 \u0441\u0442\u0440\u043e\u043a \u0434\u043b\u044f \u0438\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f \u0438\u0437 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430","Run Sync to update from %s":"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0421\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044e \u0434\u043b\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u0437 ","Source code has been modified, run Sync to update POT":"\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 \u0431\u044b\u043b \u0438\u0437\u043c\u0435\u043d\u0451\u043d. \u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0421\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044e \u0434\u043b\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0420\u041e\u0422","POT has been modified since PO file was saved, run Sync to update":"\u0420\u041e\u0422 \u0431\u044b\u043b \u0438\u0437\u043c\u0435\u043d\u0451\u043d \u043f\u043e\u0441\u043b\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0420\u041e. \u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0421\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044e \u0434\u043b\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f","Bad file path":"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043f\u0443\u0442\u044c \u043a \u0444\u0430\u0439\u043b\u0443","Empty or invalid %s file":"\u041f\u0443\u0441\u0442\u043e\u0439, \u0438\u043b\u0438 \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0435\u043d\u043d\u044b\u0439 %s \u0444\u0430\u0439\u043b","%s file has no header":"%s \u0444\u0430\u0439\u043b \u0431\u0435\u0437 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430","New template":"\u041d\u043e\u0432\u044b\u0439 \u0448\u0430\u0431\u043b\u043e\u043d","New language":"\u041d\u043e\u0432\u044b\u0439 \u044f\u0437\u044b\u043a","%s%% translated":"%s%% \u043f\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043d\u043e","1 string":{"one":"1 \u0441\u0442\u0440\u043e\u043a\u0430","few":"%s \u0441\u0442\u0440\u043e\u043a(\u0438)","many":null},"%s fuzzy":"\u043d\u0435\u0442\u043e\u0447\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434","%s untranslated":"%s \u043d\u0435 \u043f\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043d\u043e","Failed to compile MO file with built-in compiler":"\u041e\u0448\u0438\u0431\u043a\u0430 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u0438 \u041c\u041e \u0444\u0430\u0439\u043b\u0430 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u043c \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u043e\u043c","Loco, Translation Management":"Loco, \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430\u043c\u0438","Manage translations":"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430\u043c\u0438","Translation options":"\u041e\u043f\u0446\u0438\u0438 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430","Loco Translate":"\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u0447\u0438\u043a Loco","Settings":"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","File download failed":"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0444\u0430\u0439\u043b\u0430","Unknown language":"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439 \u044f\u0437\u044b\u043a","Some files not writable":"\u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438","Some files missing":"\u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u0441 \u043e\u0448\u0438\u0431\u043a\u0430\u043c\u0438, \u0438\u043b\u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442","\"%s\" folder not writable":"\"%s\" \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438","POT file not writable":"\u0420\u041e\u0422 \u0444\u0430\u0439\u043b \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438","PO file not writable":"\u0420\u041e \u0444\u0430\u0439\u043b \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438","MO file not writable":"\u041c\u041e \u0444\u0430\u0439\u043b \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438","MO file not found":"\u041c\u041e \u0444\u0430\u0439\u043b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d","Folder not writable":"\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438","User does not have permission to manage translations":"\u0423 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043f\u0440\u0430\u0432 \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430\u043c\u0438","Failed to compile MO file with %s, check your settings":"\u041e\u0448\u0438\u0431\u043a\u0430 \u043a\u043e\u043c\u043f\u0438\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u041c\u041e \u0444\u0430\u0439\u043b\u0430 \u0441 %s . \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438","Invalid data posted to server":"\u041d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435","Package not found called %s":"\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d \u043f\u0430\u043a\u0435\u0442  \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ","Web server cannot create backups in \"%s\". Fix file permissions or disable backups in settings":"Web \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u0443\u044e \u043a\u043e\u043f\u0438\u044e \u0432 \"%s\". \u0418\u0441\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430, \u0438\u043b\u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445","Web server cannot create \"%s\" directory in \"%s\". Fix file permissions or create it manually.":"Web \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \"%s\" \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0432 \"%s\". \u0418\u0441\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430, \u0438\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0432\u0440\u0443\u0447\u043d\u0443\u044e","Web server cannot create files in the \"%s\" directory. Fix file permissions or use the download function.":"Web \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0444\u0430\u0439\u043b\u044b \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 \"%s\" . \u0418\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430, \u0438\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438.","%s file is not writable by the web server. Fix file permissions or download and copy to \"%s\/%s\".":"%s \u0444\u0430\u0439\u043b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u0430\u043d \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440. \u0418\u0441\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0438\u043b\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0438 \u0441\u043a\u043e\u043f\u0438\u0440\u0443\u0439\u0442\u0435 \"%s\/%s\".","Cannot create MO file":"\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u041c\u041e \u0444\u0430\u0439\u043b","Cannot overwrite MO file":"\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u041c\u041e \u0444\u0430\u0439\u043b","Failed to write MO file":"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0438\u0441\u0438  \u041c\u041e \u0444\u0430\u0439\u043b\u0430","No strings could be extracted from source files":"\u041d\u0435\u0442 \u0441\u0442\u0440\u043e\u043a \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0438\u0437 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430","Unknown error":"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430","PO file saved":"\u0420\u041e \u0444\u0430\u0439\u043b \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d","and MO file compiled":"\u0438 \u041c\u041e \u0444\u0430\u0439\u043b \u0441\u043a\u043e\u043c\u043f\u0438\u043b\u0438\u0440\u043e\u0432\u0430\u043d","Merged from %s":"\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u043e \u0441 %s","Merged from source code":"\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u043e \u0441 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c \u043a\u043e\u0434\u043e\u043c","1 new string added":{"one":"1 \u043d\u043e\u0432\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430","few":"%s \u043d\u043e\u0432\u044b\u0445 \u0441\u0442\u0440\u043e\u043a\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e","many":null},"1 obsolete string removed":{"one":"1\u0441\u0442\u0440\u043e\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0430","few":"%s \u0441\u0442\u0440\u043e\u043a\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u043e","many":null},"Your changes will be lost if you continue without saving":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u0442\u0435\u0440\u044f\u043d\u044b, \u0435\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435\u0441\u044c","Translation":"\u041f\u0435\u0440\u0435\u0432\u043e\u0434","Packages":"\u041f\u0430\u043a\u0435\u0442\u044b \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u043e\u0432","File check":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0444\u0430\u0439\u043b\u0430","File system permissions for %s":"\u041f\u0440\u0430\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0434\u043b\u044f ","Back":"\u041d\u0430\u0437\u0430\u0434","Get help":"\u041f\u043e\u043c\u043e\u0449\u044c","Package details":"\u0414\u0435\u0442\u0430\u043b\u0438 \u043f\u0430\u043a\u0435\u0442\u0430\n\n","Translations (PO)":"\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u044b (\u0420\u041e)\n","Template (POT)":"\u0428\u0430\u0431\u043b\u043e\u043d\u044b (\u0420\u041e\u0422)\n","File permissions":"\u041f\u0440\u0430\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0444\u0430\u0439\u043b\u0443","1 language":{"one":"1 \u044f\u0437\u044b\u043a","few":"%u \u044f\u0437\u044b\u043a\u0430(\u043e\u0432)","many":null},"Updated":"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e","Powered by":"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e","Loco may not work as expected":"\u041f\u043b\u0430\u0433\u0438\u043d Loco \u043c\u043e\u0436\u0435\u0442 \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c, \u043a\u0430\u043a \u043e\u0436\u0438\u0434\u0430\u043b\u043e\u0441\u044c","Configure Loco Translate":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Loco","Compiling MO files":"\u041a\u043e\u043c\u043f\u0442\u043b\u044f\u0446\u0438\u044f \u041c\u041e \u0444\u0430\u0439\u043b\u043e\u0432","Use built-in MO compiler.":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u041c\u041e \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440","Use external command:":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u043d\u0435\u0448\u043d\u044e\u044e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443:","Enter path to msgfmt on server":"\u041f\u0443\u0442\u044c \u043a msgfmt \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435","Generate hash tables":"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c hash \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Backing up PO files":"\u0420\u0435\u0437\u0435\u0440\u0432\u043d\u043e\u0435 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0420\u041e \u0444\u0430\u0439\u043b\u043e\u0432","Save settings":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","Template file":"\u0424\u0430\u0439\u043b \u0448\u0430\u0431\u043b\u043e\u043d\u0430","Switch to...":"\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043d\u0430...","never":"\u043d\u0438\u043a\u043e\u0433\u0434\u0430","Save":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c","Download":"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c","Sync":"\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f","Revert":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f","Add":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c","Del":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c","Fuzzy":"\u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c, \u043a\u0430\u043a \u043d\u0435\u0442\u043e\u0447\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434","Filter translations":"\u041f\u043e\u0438\u0441\u043a \u0444\u0440\u0430\u0437\u044b \u043f\u043e \u0444\u0438\u043b\u044c\u0442\u0440\u0443","Help":"\u041f\u043e\u043c\u043e\u0449\u044c","Initialize new translations in %s":"\u041d\u0430\u0447\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434 %s","Select from common languages":"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u044f\u0437\u044b\u043a \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430","or enter any language code":"\u0438\u043b\u0438 \u0432\u0432\u0435\u0441\u0442\u0438 \u043a\u043e\u0434 \u044f\u0437\u044b\u043a\u0430","Start translating":"\u041d\u0430\u0447\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u0432\u043e\u0434","New version available":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u043d\u043e\u0432\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f","Upgrade to version %s of Loco Translate":"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c Loco Translate \u0434\u043e \u0432\u0435\u0440\u0441\u0438\u0438 %s","Select a plugin or theme to translate":"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u043b\u0430\u0433\u0438\u043d \u0438\u043b\u0438 \u0442\u0435\u043c\u0443 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430 ","Themes":"\u0422\u0435\u043c\u044b","Plugins":"\u041f\u043b\u0430\u0433\u0438\u043d\u044b","Core":"\u042f\u0434\u0440\u043e"} 
);