'use strict';

/**
 *  Test if a word is palindrome or not
 *
 *  @method isPalindromePairs
 *  @param {String} word
 *  @return {Boolean}
 */
var isPalindrome = function (word) {
  var i;
  var length = word.length;
  var loopLength = parseInt(length / 2, 10);

  for (i = 0; i < loopLength; i += 1) {
    if (word[i] !== word[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  var i, j, wordLength, prefix, suffix, reversedPrefix, reversedSuffix;
  var dict = {};
  var result = [];
  var length = words.length;

  if (!words || length === 0) {
    return [];
  }

  for (i = 0; i < length; i += 1) {
    dict[words[i]] = i;
  }

  for (i = 0; i < length; i += 1) {
    wordLength = words[i].length;
    prefix = '';
    suffix = words[i];
    reversedPrefix = '';
    reversedSuffix = suffix.split('').reverse().join('');
    for (j = 0; j < wordLength + 1; j += 1) {
      if (j !== 0) {
        prefix += words[i][j - 1];
        suffix = suffix.slice(1);
        reversedPrefix = words[i][j - 1] + reversedPrefix;
        reversedSuffix = reversedSuffix.slice(0, reversedSuffix.length - 1);
      }
      if (j !== 0 && prefix === reversedPrefix && reversedSuffix in dict && dict[reversedSuffix] !== i) {
        result.push([dict[reversedSuffix], i]);
      }
      if (suffix === reversedSuffix && reversedPrefix in dict && dict[reversedPrefix] !== i) {
        result.push([i, dict[reversedPrefix]]);
      }
    }
  }
  return result;
};

// Version 2
// for (i = 0; i < length; i += 1) {
//   wordLength = words[i].length;
//   for (j = 0; j < wordLength + 1; j += 1) {
//     prefix = words[i].slice(0, j);
//     suffix = words[i].slice(j);
//     reversedPrefix = prefix.split('').reverse().join('');
//     reversedSuffix = suffix.split('').reverse().join('');
//     if (prefix === reversedPrefix && dict[reversedSuffix] && dict[reversedSuffix] !== i) {
//       result.push([dict[reversedSuffix], i]);
//     }
//     if (suffix === reversedSuffix && dict[reversedPrefix] && dict[reversedPrefix] !== i) {
//       result.push([i, dict[reversedPrefix]]);
//     }
//   }
// }

// Version 1
// for (i = 0; i < length; i += 1) {
//   for (j = 0; j < length; j += 1) {
//     if (i !== j) {
//       if (isPalindrome(words[i] + words[j])) {
//         result.push([i, j]);
//       }
//     }
//   }
// }

// test cases for palindromePairs
console.log(palindromePairs(['bat', 'tab', 'cat']));
console.log(palindromePairs(['abcd', 'dcba', 'lls', 's', 'sssll']));
console.log(palindromePairs(['a', 'b', 'c', 'ab', 'ac', 'aa']));
// console.log(palindromePairs(['bchcfehaiaajbibjeh', 'b', 'abfcgcgechbci', 'eiefcgaedcg', 'iccci', 'diaijheecaied','idgc','iighhebjia','f','fbhgggfgj','daddiidfahi','fbafdbfcjbgifbeg','hag','iaedbjfhff','agigcfajfgbijc','ea','idacbjda','ffgcbhgaghgcfj','hcagid','ajdadjefejbeh','bdbgjd','dhdcjghahc','djacchdgebcgehjfgjfj','ggaaicg','gj','cbdcgfbijdihjgj','aghaicgchaiij','idajacfbabhigaa','jdgechbggeddjdc','jjdjdihhdjfafff','jghfhi','aih','bf','digdgfhfdgjjgdc','baf','daiadgeagjbibih','cidjbdgjafibbejbbic','caaecgbecegdfiegbeii','icchgffd','jbcjajadgjcgaiabjgfd','fcebbgahjieiicegaicc','gdeg','gehfchfebbdegaahifeg','cfbaibeiicd','idjdbahdagjiiaeff','ghjca','dfgabheifhffa','ecfeefiicihg','bjfjaefffdgaaefaaebh','cjf','gdbgce','cdihdcdadechhejbhidg','dfhgdgjfjeigfgca','idcjhgicihebabbjj','fbegafiha','jaadeede','ffefjjdfdccfgicgiih','jfcaibgf','g','jjacejd','ib','ifiejbcfgjcefbajif','ehbgcghhaicj','bejd','ifeagedcegefbhb','ccjcbbjdeb','fabaee','aighgdffcch','bjchjgfbh','gfjgeeeehafgj','egcafchgbg','hfabbaabjghfeagadh','cacejai','fjieabfdhjjjccge','diaeafjjcheb','dd','fbfhggbbjhgcdbeab','gffhaahg','feicdb','gejbfhjfchhefcie','ahdbcb','jie','eadagjbfhgf','dajcdigeaia','ifiba','ihhhgj','fafdbfbaefffhaccajh','hicdecgbaacefch','efdddjacacc','dcaddfcejiahfdjieea','ebcceejcbjfa','cgij','gihhjjbeidadcggbddc','ififggggbgfghidd','jefiecejjhjf','gdc','fjaifddeihdeeahae','dhbdbfhgjjcc','jidihhafbgcd','bjhhgdbijhjgacebid','cgjbedadajicjedfg','jae','hjjeaghfjg','gjhggaigcdj','eehbadeieigicg','dgffcfg','daefgh','def','ji','jecgijhcdjhgbjgjdejd','ebgbcigah','jhije','hjadadgffac','dbajjfigfhigcaebheba','hjgi','fchbidbbfb','hgbeigfdid','ffbfebhbdhjidcb','cgfdgdaffbgchgc','acbg','gaifbgjhbcjhcfij','bafbh','bagd','cibbihhbdaghdhfajcf','e','cfgafaich','cifgddbibbd','jhadg','jcbjefjc','ehahcbhfdiecjeja','gehgbfjbccg','jbibjcfdh','baiafgdfejjhd','idicfjaiaiabbiacfjgh','efccfgcg','ia','fgdad','dijcfddaafehffbgf','ahibgaaeebh','diefidijhbhbiagg','ejedbicfifcg','fe','ajacebfjgaddedhaaf','fdbjiccbfaaej','dhgg','egdidaeai','adhgiihdedicjfdehaia','cciehcgb','d','agdgieidbhgeeghieed','aa','daiajfdediagii','gidcacdfchdhfffjfbb','ciiefdjddjdfjfaj','ahjicijeidaghbabdci','ecdjhaefa','dbcfdicjaja','cgchfjbecgaica','hfehgag','jiebba','hdjfcbcjfejfdf','a','ejjacigaciabe','fhadidbdbcgcbjdfff','cefabgabgcbcdcghab','iijjdcfccegfbffijhjj','gicc','acdgabefiacagfjj','jeagjdgbhjcjichcfia','efg','baheidjhiigd','fgfbfjfdcegahjigehi','ciijbadgiab','jiejfdjgfgeddighja','ageadfhbhbdagdj','icigbfcedaifa','jedgd','ibefh','aihdf','h','jjceedjbedeefhcj','jidecahidhbfagfdi','jfbbdaddjicaefb','fijadafecah','hhiaecchcfjfbdchahb','eaeifbbgbifhfajc','bacdccccafdiac','dhce','ghgaciaijaaggf','hgjfaagbebfefaed','c','cggdahhgcdbiiabeja','ae','dfdghfghefggie','cijbbibahhjgjgggejcd','cabddde','egfiha','bjjgdffedifadgdeh','ifiiiaj','dbbecjbcb','bgheihchffg','ecffhfaaggegiaj','bjajhfjjajd','dhhgiach','dhieagagfhgbcjhdd','cjabdc','iiihihhdaghcd','bceeffjagchfacdecge','igicgggajjeeeii','ieiighhjjjbdgb','iacaaggibagcig','bhgggcfhd','gbiecffeccfchegea','gcbjf','fjdffjedcaifdffhaa','djajf','fgbgja','aaid','aiidahjaj','ddfiehbbbba','hafche','icaagch','cifjec','dhchghf','bhdegahijbgjafgb','bihjciibgj','eiej','aeijdga','eejcgjhjajfaeaj','jjbiageg','ejabjfhghfcja','hdjjhe','eabbbbcbcfedecaeb','jh','jjbdhicigaciagg','gigjfgbj','diaffbf','fhfaaijbjdceeaajd','ghagji','ighefbhjiijedff','fhd','eagcgdgig','edjbdjdbfe','eeffbjjchj','dagccfgcjgjigcaid','ibdafbedhdj','cefjejjedjdbcaejabd','bb','hiiiiebeaejbfiica','bbcea','ab','aaccbhbjghgeef','iddbdddghfbdcdhifj','igjbabddgeddcjjafaa','adecbadddj','dcbfffjjdaigibig','iichgcajdbiiie','ebdjdjiejeegi','hbabhdiihgchhbjj','jdggdejegebbahdf','ai','hcgjeeggadeccca','bfdjaceiegbcjfjc','ihcacegbdcc','bafi','ihbgcjaaggefbjdjd','ciihadhbagihbafcb','habfhagdfbjh','hgdggccecfgjgigb','eigebefahdfdihf','bhg','fajfabdedabe','abedcjhb','iicjadf','aihcfbdefhhaiegaccie','ehajc','gfediahah','behjcaafccggecgiic','babffia','afdhdcbiffa','icfcfj','hcbffghiaaa','acefbfggg','hg','fbihacadeadibh','ihjfgcgjjigcd','beffiihhceddgbhgjcg','hhdcdfhaehidbghajbdh','debgeejbh','ahcbh','cagefihe','jfggbhbhcebibiahea','febagdhgiefbfbec','ddcifhhbjachafgeeg','jaadijbiebfdbeibeje','fgjhdabghjce','fhicfg','jfdcbhachhg','acfejfggi','cj','hfjbbb','hgggjggff','jefeffcffddiic','cedaefighhfggjghjgdb','bihhhc','ieacgjjbgjifca','aaibfbhgeicca','acifbfgaihii','baddafg','fhajfec','ihffbhddajcce','jhefcdiiheghgcj','degjcgah','dde','jaabfdjhadaif','gba','hfebaaib','fgecefcghdh','jjgi','hdfchjgdjbcjfehc','fhfeaeig','fgdcibbjafdaf','agchicajgjdgaibadfb','gfehbf','ichcbebhgjcghhihi','bigciceiad','ebdiejehiabbgcc','jedjjfdhcicf','geijjbjjdiifcc','hhceddceghjgfebfbf','gffjbbcgfaefcgcge','jigbb','je','aaicdjcfjbh','jdidcgde','dhbdjcbfgjaagabb','bacfjcbiec','fceihggahacffbhf','jgjdjg','hgccfdbbjdjbfjecfdia','bfhhbjfijdhaicih','bjjdjjjhebhfgjeagef','caji','daaidgjedfcj','efdhf','eaihabgcahafaabg','jfhebfjghaabhfjhcahh','ag','ajfbacfbdbedii','fjgijffhcjffj','dea','ddahaiage','iicdjabigggjhe','ieghaihjibj','bdj','cbidbcehdg','aibiihfeg','ee','jgi','bdcjabeccjgheb','hhbj','fafdfhajjjeabcfcgdie','hhehja','agdcfdfjh','fafa','afghddadcfbjbcifgh','jibj','bbacfg','bbadffaee','dicjhbidi','gh','jbajigbfeagheegjdaa','aicbedbah','dcfdjiaeccgbajfjgea','iaahhcchbgfgejjhfehc','cecdgjfjedfjhcc','faehaibidhcebcfcb','hd','hddeegbccdadbjfjb','bdjadjifj','aacaehbacieij','acigdbgbh','cjjjjhjcfi','gfbihbdfe','gijcficfi','fhefedgchhhfdcgcjie','igbbcddfjadahajdjc','bceagahcfdghjj','jdcja','abbd','hhadcbihcae','abdhib','dbaidecejchbih','fbaccdajcbfij','fdcdjaddafbgj','dcci','i','aheecai','egcghfjb','ggedfbg','ecjeafhffcfjjfcc','gijggfediachjegbjdfe','bjdbccagchgcbcec','iejddfcfdihg','abcfhdfadijaecihgih','abebjchchjjbbe','bdehgfif','cjeijfacee','hbaadeicacccb','gfdbjgaghj','igehbcchj','jjia','caebafdgbcgcfg','ibdafihhej','eedeicegjeddaacgecd','aagbfhhfbhhbejjbjajf','bchdgcgjihaaidg','ciccadeg','gjhidcjdcffhfcef','bdcahhggeb','jffciecfjbjcebf','gbabjiajgcjhfehd','jdajfbicjggigbj','ebfga','jeejacgj','ibceidcedgghf','hiabbbijejhcigjjfi','dgaehccicahfcgic','bfaejg','daejhfgiegafciihaj','jgfcfeeeaeigfadhh','fjejdficgcbhhifbg','jhaiagdiffbadccf','ehbaihbhfccfd','hhehjdffbijcgedb','biiij','fbbbhebjfjjgddfffege','jdijj','ibfgebajj','cgadacabfhhhdacfj','hahgcjafiagajifje','if','abg','bjfjfhbbc','dcijidcajicbedeade','dejbdchchgdecji','hfafjfi','edjbbadfaghffc','eibdbebgdegcggggih','hcbgaechgdcgdbiegiaf','eeficfhhagbebjchbhff','edjcbjjbd','hihehfbaaabjgbc','beac','jcadhajfedgabhjfchaa','bhff','djjhcfcjiecjhbef','iddgjfh','fcejjfcajicj','fheigahegeaghifgf','agdcejc','dad','cdecjhabajcchebci','jjcjji','gbghghfcfdjefiiaici','hhdhdfcgcae','ecibiajjceeecgacc','heehfijaaf','cecjhbfhgc','gahheficaedicfhiicg','beefejaeabhaddbid','ah','chdcjdhg','eecjdhjhfibaifcc','aiei','dbegchjcecba','bbchffaj','j','habidjegh','icffghbeghdgecfi','ei','bfbj','egfccfdiihhibhgieff','fbajjgagihgbhegjbj','haijdgbcfgaaabefccd','ahib','ebfhebcidhae','gfchjebhbifcagdheha','eggdddaijjhfeeibfid','jij','edb','eeac','iehifcefib','bhcfihhecjffg','ejfjjfif','iccjjfgjggb','fcjebbijafj','hgbdjcdgciea','cgafdghfacf','dijbjidibdda','bcehicegfajbfj','ifcicchegbihe','ffhhg','aeehjfchhehaceaheded','ahgi','dcbafhcacfachdg','ihgaigaaae','hgicchcegjibb','egcechhiah','ggibfefibjbiha','gf','hefje','ehcffcecfeifdgfbf','bebeadfecdchheiegj','jfaiggjgb','ehhjif','ddca','edjcgbdhhjheiahi','gghhbheeee','fdjec','ja','cbgbfbdfdg','dhhhbchchcdif','ciajfggefjhifbcb','iedgj','hihchciicgibdbbihbec','jccgiijbcc','idifj','iijf','hfhibfadhcjf','ihgjhgieiijgecaaag','cdbachf','bbfhaibabgiadfgdhi','fgciifcheihh','adajhhaa','gaiegfdafgbcif','ebbicfifdhgjf','idbeigaibcdjih','hiddfcbcb','cjibcebebdacfa','fihjiecihfjbbhdfig','djedejgcgagbcgjib','bab','bdcecjdejdhegffi','gedd','fjddjbhhjj','ifgfcjcfcai','ahh','ifbhfhdejjejadadh','cd','ddhibh','hcgibciicfa','jefdjja','geegghfbbfcaeifff','giijcdh','dei','jjjiiejfdjfhcb','ebeefidgjhedeeddjg','behhhgfchicdddhfebic','hgdeiahjebee','ibbhieaiihaib','jiagegca','edejecjhc','iehc','bgjbdfafadeihgegb','jjbejad','iga','ggfcfjf','badad','hbaiidffje','fhdebfggeeadejadjaif','gbfjfegefaijbd','bihigjghi','bifeabifgfbif','ifh','hjeceefhje','ddbcihgj','edcifi','cfaacaddhaf','egj','debccccaf','ciiefhdjfdiei','ccfjdhbghicdac','hfbbhcjciei','geghaegdhj','igcbdehegebj','jddhjeaj','ibffhiaa','hbdijhbfcbfg','ecjbeijgbdfaj','fcddchgibadaghgdfe','cedach','gjeea','idffiafigdbhaa','edccj','ihgiahca','gicieaeche','jjgiiigbchbiie','ccicf','ibbbc','ead','egeedc','ajjjhajjbhb','chjj','acdbjfhdcdbfggjdab','ehjdbhicgajfgafagbc','da','faaegbi','gdbbeajjiejdhijef','ggdbbhjjaibf','ffej','effgebjeejadecij','df','jefgcdie','hicecceichiibb','cej','jfafgihdiafce','jjdbihcibii','agiigbgfdbejdd','iedaajbdcciigfdc','fecjccidgafbjbddff','dhfejdeccihb','cgffagcafceib','ihifihf','jdibafaejdjb','jeigdgeei','iehdehhccfchbbhgcejj','effbhfihac','iiafgada','ebdgeggigcfgbiabg','ehbidfji','jcbjid','cihfecddbabgjj','jdgidjeiegfjhh','ghfgbcghbidhjgegfa','jdbefebhjefgbbdih','aacahh','fjci','cebcddiihbeg','bfajdgahdifbdbfchidc','iafjjejehhdghidjfbb','feaaicecedefcdjff','ihf','ibhebfighfjbbbcge','cjhaddgdhidbgefdege','bbcgdgabddjhc','jbeabgcffcei','eg','didaafcdehgbba','biifijf','ajecbaefgdhff','efagdcecdijefej','ejecjfcdafa','ifjjigbicacbajbh','bhbiigbicedjai','ghcjjgfc','gfdcaceaeabjbgi','djibiccadahaeichfe','jjjeebdgbaaigfebe','aibadijjefjhechd','afjiddaidibhbjaf','gaiijeffjjbbhjehe','cec','fagd','bidga','eiahehbdebcibfcj','ajgbcecfgfbacbdd','cdih','cdei','abe','dfechhhgiiibj','biijaeehjei','ecaiadjgadbcbijidfi','aibjgaachiadge','eccgbbadddfidifgbaa','dicbbjiedeiafehebgih','edeaeihjib','gddiac','aeadjiecia','abjehchdbbddjgichjib','gbbbg','hbbcfcfdhjide','jdfiiefjjjhgaifebd','jabbffeag','bagihjaecifgbdfgjf','hiac','fcjafjdiagfce','difjbedficc','ggijgegagcijjdh','ihihg','echjbjdaejjbdi','afhijjd','idigc','gehfgbg','agghaggbfdega','dhiddchjbdgccdiicb','ifcc','jfjd','fdagciafieidibjbd','jifbjdhcdgbchhc','bba','cfiffifbiaiic','ced','cbeeahdhfefebeicbbh','ebaifidc','ghach','ccedjfeefieaahcihc','hfhbgiicijffj','ijchegejhgcgcfc','gfbagghgejdijgge','hfghjffee','acicfjifjj','ehfca','fhabgddc','heifhfgahfefjbccafaj','ebfaibii','aghggjgbdejigbgjfga','gjaj','gficdc','ififeajgicgdgi','iaiaigihhi','ejdbdacaccbaaghidi','ijigefdjaaeaijhbga','dgdgcfciaghi','ddgcaba','fa','bhfgifghc','bfc','jfdjaabc','ecihfdaajjcd']));
// console.log(palindromePairs(["baabbbababbaababaabbaabbbbaaaaababbbbaabbbbababbaabbaabbababbaba","aaaaaabaabababaaabbbbbabbabbbbabbabba","babaaabbababaababaaaaabbbaabaabaabbababbabbababababbbbbbabbaaaaababbabbaabababbabaaabbbababaaaabbabaabbbaabbababaaaaaabaaababbbabbbaaababaabbbbaaaaabbbbababbabaabababb","ababbbaabaabbaaabaabbabaabbaaabbbabaaabbaaaababaaabbbabbbbbbbbabbbabaabaaabbbbabaaabaababbbaaabbbbbababbaaaaaab","abaababbabbabbbbaaaaabbbba","bbababbbabaaaababaabbaaabababaababbbaaaaaababbbaaaaaaaaaaaaaaababbaaaaaaabaabaabaaaaaaaaabbbaabaaaa","bbaabbabaabaabbabbaaaabbaaaaabbbbbaabbbbbbaabababbabbaaabaabbbbbabaabaaaabaabbaaaaaa","bbaabbbabbbbbbababbaabbababbaaabbaaaaabbbbbaaabaaaababaaababababbaabbaaabaaabababbbabbaabbbabbbbbbababbaabbbabbbaabaaa","aabbbbbabbbbbbbbabbaabababbbbaabbbbababbaabbbbbabbbaaaaabbaaaaaaabababaaaaababbababaabbbbbbbbaaabaaabaaabaaabbbbbbaabaaabbabababbbaaaabbababababbbabbbbaaaba","aabbaabaaaaaaaabbaabbaaabbbaaababbbbbbbbabaabbbaabbbababbbabbaabababaabaaa","bbbbabbaabbbaabbbbbbaabbbbbaabbbbbabbabbbaaaabaabbbaaaabaaabbbbbaabaabbbbbababaabaababbbbbaababaaaabbababbabaaaabbbabbbaababbababaabbabbbaabbbabbbaaaaaaaabbaaabbabbaabbaabbbbabababbababbbaaa","aabababbabbaa","bbbbababbbbbbabbabbbabbabbbbababbbbaaabababbabbbbaabbbbbbbababababbabbbbaabbbbaababaaabbbbabbbbbabbbaaabbaaabbaababababaabbbbbaaaabaabaa","bbbbababbbababaaababaabababbaaabbbbaaabaaaabbbbabbbbaaaabaabbbbababaabbababbabaababababbaaababaaaaaabbbaaababaaabaaabbbbbaaaaba","aababbabaaabbbba","bbaaaabbbbbaaababbbabbababbbaaaababbbaabbbabbaaabbaaaabaaaaababbbbbbbbbbbabababbaabbbbaabbba","aabaababbbbbaabbbabaababbbbabbbabbbbbbababbababbabaaaabbaaabab","baabbbbaaaababbbbababababbbbbbaabbbaaabbbbabaabaabaabbbbbaaabaabbbbaabaaababbbbaababaabaaabbaaaaaaaababaabbaabaaabaaaaaababbabaab","aaaabbbabbabbbaababbbaaaaabbaaaabbabbbaababaabababaaaaaaaabbaabbbbbbaabbbbbbbabababaabaabaabbbabbabbaaaaaaababaabababababababaaababaaabbbabababbbbbbabaaaababbbbaabbabbabab","baaaababbbaaaaaaababaaa","abaaaaababaabaabaaaaabababbbbaaaabbbbabbabbbabbababaaabbaaaabbbaaaaabbbbbbaaababbbabbaabbbaabbaabaaaaaaabbbbabababbbbbbababaaababbbbaaabbaabababbbaaabbabbaabaabbbababbabaababbbbbaaaabaabbbabb","abaabbbabbaaaabbabaaaaaaaaabaabbbbabbaabbbbaaa","babaaabaababbbbaaabbbababbbbbabbbaabaaabbabbaabababbbbbaaababbbabaabaabbbbaaaabaaaabbabbbaabbaaabbbabbaabb","aabaaabbababbbbaabaaaabbbbabbbabaabbbbabaababbabaabbbbbbababbaabbababbabbaaaabbabbaabaabbabbbaaaaaaaabaabbababbabaababaaabaabbbabababbabba","aaaabbabaabbbababbbbabbaa","babb","abbbbbabbbbbaabaabaaabbbbbababbababaaabaababababaaaabbaababbaaaaaababaababbabbaabbabaaabbbbabbbbbbbbbaabbaaabaabbbbaabbababbbbbabaaabaabaabbabbbbbbaaaabaabbabbbbbaaabbbbabaaabbbbbbbbbaa","babbaaaaabaaabbbbbabaaabaaaaababbbaaababaabbbaababaaabaaaaababbbabaabbbaaaaaabaaabaaaaabbaabbaaaabaaaabbbbaabbbaaaabbabaaababbbabbaaaabbbaababbabbaababbaabbbaabbaabbbababa","ababbbbaaabbbaaabbabbbbbaabbabaabbbabbabababababaaabbbaabbaaaaabaabbaabbbbbbabaabbaaabbbbbbbaabbaaabab","bbabaababbaaabb","abbbbbaabaaabaaaa","aabaaaaaababaaaaaabbabbbbbbbaaaabbaabaaabaabababaabbbabbbabbababaabbabbaaabaabaabaaaabbababaabaaaaababaabaabaabbabaababbbabbbbbbaabababbabbbbbbbbaabbbababbaabbaabbbabbbbabbaaabbbbaaaaababbabbabbb","babaabbbbaababaabaababababababbaaaabaaaabbbbaaaaabbbababbabbbabbababbbabaabbbbaabbabbabbabaababbaabbbabbabbabbaaaabaabbbbaabbbaaabbbbbbaaabbaababababbbabbbbabaababbbbaaabaabaababbaaa","abaaabaaabbbbbabbbabbbababbaaabbababbaaaaabaababaaabbabbbbbbaaaaaabbaabaaababaabbababbbbbabaabbaaaaaaabbaaaabababbabaaaabaaabaabbbbbbbbabababbabaaababbbaaabbbaabbabbbbbbbaaabbababaaabaabaaabbaababaaa","aabbbbbabbababbbbbbbabbbbbbabaababaabbbaaaaaabaabaababaaaabbbbbaabbababaaabbbbbaabaabbbababbaaabbbbbbaabaabbbaabaaabbaaaaabaaaaababbabababaaaaaabaa","baabaaaaabbaabbbbbbbabaababbbbbababbaaaabbaaaabaabaaaaaababaabbbabbaaabbababb","bbbabbbaaaaababbababaaba","abbababbababbbbaabbbaabbbbbbabbabbab","aaabbbbaabaabbaabaaabbabbbababaabaaaaaabaaaaaababbbababaaaabaabbaaaabbaaabaabbaaabaabaababbababababababbaabbbbbabbaababbaabababbaabbbbabaabbabaaaaaaaabaaaababa","bbabbabbbbbaaaaaabaabaaaababbbbbbbaabbbbaaabbaaaabbabaaaabbbbbabbbabbbabaabbaabaaabbbaabbaaaabbaaaaabababababbbaaaababbbbaaaabbbbbaaaababa","bbbaaababaaabbbbbaabbabaaababaabbaaabbababbbaabbabbbaababababbaabbabababaabbabbbaababaaaabaaababbbaabbbbabbbaaaaaaaaabbabbabbbaabbaa","baabbbbababbbaaaaaabbbbbbbbaabababbbbaabbabaaabaabaaabbaaab","baaabbabbaaabaababaabbbbbaabbbabbbbaaababbbabbabbaabbabababaaabaabbbbaabaaaabaababaaabaaaaababbbaabaabaaabbbaaaabaaaaaabbbaabbaaaababaaaaabbbbbbabb","bbbbaabbbbbaabbbababababaababaababbbaabbbbbabbbabaaaababaaaabaababbabaaaaababaaabbbaabbabaabbbabbbbabaaababbbabaabbabbbbabaaaabaabbbaabbaaabbaabaabbababbabbaabbababaabbaabbbbbbb","bbbabbbbbaabaababaaaaabbbaaabbbabbabbbabaabbbaaabbabbbbabababaabaaabbaababbbabbabbbaabaabbabababa","abaababaabababbbabbbbabbabababababaaaabbbbbaaababbbaaabbbaaababbaaabababbbabababbbaaabbbaabbbabaabbabaaaaaaababaabaababababbbbbaabbababaaabbbaaabaaabbbbbabaababbbbaaaaababaabaabbaba","abababbabbaaabaaabbbaaaababbaabaabababbbbbabbbaaababaaababbabaaabbbaaabbbbbbaabbabaaabbaabbabbbabbaaabbabaaaaabbabaaabaabbabbaaabbbbaaaababbbaababaabaabababbbababbaabbbbbbababababbabbaaa","abbbaababaaaaaaababaabbbbbaabbbaaabbabbabbbabbbababbaabbaababaaabaabbaaabaaaaaabbaabaababbabbaababbbbaabbbbbaaaabbabbbbaaaababaabaaabbaabaabbababbaabaaaaaaaaaaabababaaabaaaababbbbbbaaabbb","bbaaababaaabbbbabbbbabababbbaaababbaababaaababaabbbbbb","baabababbbbbbbbbaaababaabbabbbbabaaaaabbaaabbabbbbabbbaabbaabbbaaa","ababbbbbbbaaababaaaababaaaabaaaababbbaabbbaaaaaabbbaabbbbbaabbbbaabababbbbaaabbaabbababababbbbabababaaaa","abaabbabbbabbaaabbaaaababaabaaaaabbabaaabbaaabababbbbaaaaaababbbbbaabaabbbabbb","aaaaabbabaaabbababbbbbaabbaabbbaaabbaaaabbbbabaaaabbabbabbbbbaabbbbabbabaaabaaababaabaaaabaababbbbbbb","ababbabbaaabbaabaa","bbaaabbabababbaabbbbbaababbaababbbbbbbbbbbbabbbabbbabbbabbaaabaabababbbaabbbb","bbbaabbababbaaaabbabbbab","aabbaaabbaabbbaabaaababbabbbbbabbabbabbbabaaabbaaaabaaabbaabaaaabaaabaaaaabbbbbbbbbababababbbbabbabababaababbbbbababbbbbbbbaabbaaaaabbbaaaababaababababaababbbaababbaabbaabbbbbbaa","abbababaaaaabbababbbbabbababbabbaabaabaaaaabbabbaabaaabaaaabaabaaaaabaabbbbababaaaaabbaaaaabbabbbaaabaaababaaaaabbabababbbbbabaaababaabbbaaabbaaaabbbbbbaaaaaababbaabbaabbabbbaaabbbbaabbabaaababbba","ababbabaaabababbabaaaabaababbaaaabbbbabaabbbabbbbaaaaaabbbbbbaabaabaabbbbbbabbaabbbabaabbabbaababbb","ababaaaaaaaaabbababaabbaababababbbbbbbaabbbaabbaabbbbaaabbaabbabbaababaababbaababbbbaabbbaaabbbbbbbaaababbbbbbbbaabbbbbaababbbabbaaaababababbbabbbbaabaaabaaaaba","aabbbaaaabaabbaaaababbaaaaaabbbbaabaabaaaabbbaaaabaabaabaababbbabbaaaabbabbbabababbba","babbaaabbabaaababbaabbbababbaaaababbaabaaaaaaabbababbababaabbaaabba","babaaabababbbbabbbbaaaaaaababbbababaabbabbaaaabbbbaaa","baabbbabaabaabaaaaaaabbaaabbbabbbbbaaababbbbbbbababbaaab","bbbabbbbbabbaabbbabbbbbaaabaaaabbabbaababbaaaaaabbabbbaa","aaaaabaabaababaaabbbaaaabaaaaaabaababaaabababbbabbabaababbbaaaaabbaabaabaabbbabaababbbbabaaaabababaaaababbbbabaaabb","bbbabaabaaaabbaabaabbaabbabaa","aaaaaaaabbabbaabbaabbaabbabababaaabaabbbaaaaaaabbbbbbabaaaabbbabbaaabbaaaabbbbbabbabbaaaababbabbaaabbbaabbbbaabbbbbbbbbaaabbabaabbbabbababaaaababaaabbaaaaaa","abaaaabaabbbaaababaababababbbbbaaaabbbababbaabaaabababbaabbaa","baababbabbaabaaba"]));

// test cases for isPalindrome
// console.log('\'\' :', isPalindrome(''));
// console.log('a:', isPalindrome('a'));
// console.log('aa:', isPalindrome('aa'));
// console.log('ab:', isPalindrome('ab'));
// console.log('abcba:', isPalindrome('abcba'));
// console.log('abba:', isPalindrome('abba'));
// console.log('abcdba:', isPalindrome('abcdba'));
