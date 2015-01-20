/**
 * Loco js export: JavaScript function
 * Project: loco.po conversion
 * Release: Working copy
 * Locale: tr_TR, Turkish
 * Exported at: Tue, 20 Jan 2015 18:43:45 +0000 
 */
loco = window.loco||{}, loco.t = function( pairs ){
    
    // named plural forms
    var pluralForms = ["other"];
    
    // calc numeric index of a plural form (0-0)
    function pluralIndex( n ){
        return Number( 0 );
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
    {"Error":"Hata","Warning":"Uyar\u0131","OK":{"OK":["TAMAM","TAMAM"]},"Permission denied":"\u0130zin reddedildi","Settings saved":"Ayarlar sakland\u0131","New PO file":"Yeni PO Dosyas\u0131","You must specify a valid locale for a new PO file":"Yeni PO dosyas\u0131 i\u00e7in ge\u00e7erli bir Yerel De\u011fer belirtmek zorundas\u0131n\u0131z","No translatable strings found":"\u00c7evrilebilecek c\u00fcmle bulunamad\u0131","Cannot create a PO file.":"Bir PO dosyas\u0131 olu\u015fturulamaz.","PO file already exists with locale %s":"PO dosyas\u0131 %s Yerel De\u011fer ile zaten var","PO file used as template. This will be renamed to %s on first save":"PO dosyas\u0131 \u015eablon olarak kullan\u0131ld\u0131. \u0130lk kaydetmenizde %s olarak isimlendirilecek.","File cannot be created automatically. Fix the file permissions or use Download instead of Save":"Dosya otomatik olarak olu\u015fturulam\u0131yor. Dosya izinlerini d\u00fczenleyin ya da \u0130ndirilenler dizinine kaydedin.","%s file is empty":"%s Dosyas\u0131 bo\u015f","Run Sync to update from source code":"Kaynak kodundan g\u00fcncelle\u015ftirmek i\u00e7in E\u015fle\u015ftirme Yap","No strings could be extracted from source code":"Kaynak kodundan herhangi c\u00fcmle \u00e7\u0131kar\u0131lamad\u0131","Run Sync to update from %s":"%s kayna\u011f\u0131ndan g\u00fcncelle\u015ftirme i\u00e7in E\u015fle\u015ftirme Yap","Source code has been modified, run Sync to update POT":"Kaynak dosyas\u0131 de\u011fi\u015ftirilmi\u015f, POT g\u00fcncellemesi i\u00e7in E\u015fle\u015ftirme Yap","POT has been modified since PO file was saved, run Sync to update":"PO dosyas\u0131 en son sakland\u0131\u011f\u0131ndan beri POT de\u011fi\u015fikli\u011fe u\u011fram\u0131\u015f, g\u00fcncelleme i\u00e7in E\u015fle\u015ftirme Yap","Bad file path":"Uygun olmayan dosya yolu","Empty or invalid %s file":"%s Dosyas\u0131 bo\u015f veya ge\u00e7ersiz","%s file has no header":"%s Dosyas\u0131n\u0131n ba\u015fl\u0131\u011f\u0131 yok","New template":"Yeni \u015fablon","New language":"Yeni Lisan","%s%% translated":"%s%% \u00e7evrildi","1 string":{"other":"1 c\u00fcmle"},"%s fuzzy":"%s belirsiz","%s untranslated":"%s \u00e7evrilmemi\u015f","Failed to compile MO file with built-in compiler":"Dahili derleyici ile MO derlemesinde hata oldu","Loco, Translation Management":"Loco, \u00c7eviri Y\u00f6netimi","Manage translations":"\u00c7evirileri Y\u00f6net","Translation options":"\u00c7eviri Se\u00e7enekleri","Loco Translate":"Loco \u00c7eviri","Settings":"Ayarlar","File download failed":"Dosya indirme hatas\u0131","Unknown language":"Bilinmeyen dil","Some files not writable":"Baz\u0131 dosyalar yaz\u0131labilir de\u011fil","Some files missing":"Baz\u0131 dosyalar yok","\"%s\" folder not writable":"\"%s\" dizini yaz\u0131labilir de\u011fil","POT file not writable":"POT dosyas\u0131 yaz\u0131labilir de\u011fil","PO file not writable":"PO dosyas\u0131 yaz\u0131labilir de\u011fil","MO file not writable":"MO dosyas\u0131 yaz\u0131labilir de\u011fil","MO file not found":"MO dosyas\u0131 bulunamad\u0131","Folder not writable":"Dizin yaz\u0131labilir de\u011fil","Folder not found":"Dizin bulunmad\u0131","User does not have permission to manage translations":"Kullan\u0131c\u0131 \u00e7evirileri y\u00f6netmeye yetkili de\u011fil","Failed to compile MO file with %s, check your settings":"%s ile MO dosyas\u0131 derlemede hata, ayarlar\u0131n\u0131z\u0131 denetleyin","Invalid data posted to server":"Sunucuya g\u00f6nderilen bilgi ge\u00e7ersiz","Package not found called %s":"%s isimli paket bulunamad\u0131","Web server cannot create backups in \"%s\". Fix file permissions or disable backups in settings":"Web Sunucusu \"%s\" adresinde yedek olu\u015fturamaz. Dosya izinlerini d\u00fczenleyin veya ayarlardaki Yedeklemeyi ge\u00e7ersiz k\u0131l\u0131n.","Web server cannot create \"%s\" directory in \"%s\". Fix file permissions or create it manually.":"Web sunucusu  \"%s\" dizinini \"%s\" burada olu\u015fturam\u0131yor . Dosya izinlerini d\u00fczenleyin ya da elle olu\u015fturun.","Web server cannot create files in the \"%s\" directory. Fix file permissions or use the download function.":"Web sunucusu \"%s\" dizini i\u00e7inde dosya olu\u015fturam\u0131yor. Dosya izinlerini d\u00fczenleyin ya da indirme fonksiyonunu kullan\u0131n.","%s file is not writable by the web server. Fix file permissions or download and copy to \"%s\/%s\".":"%s dosyas\u0131 web sunucu taraf\u0131ndan yaz\u0131lamaz durumda. Dosya izinlerini d\u00fczenleyin ya da indirip \"%s\/%s\" yoluna kopyalay\u0131n.","Cannot create MO file":"MO dosyas\u0131 olu\u015fturulam\u0131yor","Cannot overwrite MO file":"MO dosyas\u0131 \u00fczerine yaz\u0131lam\u0131yor","Failed to write MO file":"MO dosyas\u0131 yazmada hata","No source files in this package, nothing to sync":"Bu pakette e\u015fle\u015ftirilecek kaynak dosyalar yok.","No strings could be extracted from source files":"Kaynak dosyalar\u0131ndan herhangi c\u00fcmle \u00e7\u0131kart\u0131lamad\u0131","Unknown error":"Bilinmeyen hata","PO file saved":"PO dosyas\u0131 kaydedildi","and MO file compiled":"ve MO dosyas\u0131 derlendi","Merged from %s":"%s \u00fczerinden birle\u015ftirildi","Merged from source code":"Kaynak koddan birle\u015ftirildi","Already up to date with %s":"%s ile zaten g\u00fcncel","Already up to date with source code":"Kaynak kod ile zaten g\u00fcncel","1 new string added":{"other":"1 yeni c\u00fcmle eklendi"},"1 obsolete string removed":{"other":"1 kullan\u0131md\u0131\u015f\u0131 c\u00fcmle kald\u0131r\u0131ld\u0131"},"Your changes will be lost if you continue without saving":"Kaydetmeden devam ederseniz de\u011fi\u015fiklikleriniz kaybolacak","Source text":"Kaynak Metin","%s translation":"%s Dili Nerede? (\u00f6rnek: Turkce \u00c7eviri)\n%s \u00c7evirisi","Comments":"Yorumlar","Context":"Metin","Translation":"\u00c7eviri","Packages":"Paketler","File check":"Dosya denetimi","File system permissions for %s":"%s i\u00e7in dosya sistemi izinleri","Back":"Geri","Get help":"Yard\u0131m al","Package details":"Paket detaylar\u0131","Translations (PO)":"\u00c7eviriler (PO)","Template (POT)":"\u015eablon (POT)","File permissions":"Dosya izinleri","Extends: %s":"","1 language":{"other":"1 Lisan"},"Updated":{"Updated":["G\u00fcncellendi","G\u00fcncellendi"]},"Powered by":"Haz\u0131rlayan:","Loco may not work as expected":"Loco beklendi\u011fi gibi \u00e7al\u0131\u015fmayabilir","Configure Loco Translate":"Loco \u00c7eviri Kurgusu","Compiling MO files":"MO dosyalar\u0131 derleme","Use built-in MO compiler.":"Dahili MO derleyici kullan.","Use external command:":"Harici komut kullan:","Enter path to msgfmt on server":"Sunucudaki msgfmt yolunu girin","Generate hash tables":"Hash tablolar\u0131 \u00fcret","Backing up PO files":"PO dosyalar\u0131 yedekleniyor","Number of backups to keep of each file:":"Saklanacak her dosyan\u0131n yedek say\u0131s\u0131:","Experimental features":"Deneysel \u00d6zellikler","Enable Wordpress core translations":"WordPress \u00c7ekirdek \u00c7evirilerini Ge\u00e7erli K\u0131l","Save settings":"Ayarlar\u0131 Kaydet","Template file":"\u015eablon dosyas\u0131","Switch to...":"Ge\u00e7i\u015f Yap:","never":"asla","Save":"Kaydet","Download":"\u0130ndir","Sync":"E\u015fle\u015ftir","Revert":"S\u0131f\u0131rla","Add":"Ekle","Del":"Sil","Fuzzy":"Belirsiz","Filter translations":"\u00c7evirileri filtrele","Help":"Yard\u0131m","Initialize new translations in %s":"%s i\u00e7in yeni \u00e7eviriye ba\u015fla","Select from common languages":"Yayg\u0131n diller aras\u0131ndan se\u00e7","or enter any language code":"veya herhangi bir dil kodu gir","create in <code>%s<\/code>":"<code>%s<\/code> Adresinde Olu\u015ftur","create in global languages directory":"Genel Language dizininde Olu\u015ftur","Start translating":"\u00c7eviriye Ba\u015fla","New version available":"Yeni versiyon mevcut","Upgrade to version %s of Loco Translate":"Loco \u00c7eviri eklentisini %s versiyonuna y\u00fckselt","Select a plugin or theme to translate":"\u00c7evirisini yapmak i\u00e7in bir eklenti ya da tema se\u00e7","Themes":"G\u00f6r\u00fcn\u00fcmler","Plugins":"Eklentiler","Core":"\u00c7ekirdek"} 
);
