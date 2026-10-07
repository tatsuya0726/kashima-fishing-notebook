Object.assign(SOURCES,{parkWinter:['鹿島港魚釣園｜2026年1・2月記事','https://kashima-fa.com/category/2026/page/2/'],daiwaLocal:['DAIWA｜鹿島港魚釣園の対象魚','https://www.daiwa.com/jp/partner/fishingmap/fishingfacility/list/kashimakouotsurien_2'],toneHaze:['国土交通省｜利根川河口のマハゼ','https://www.ktr.mlit.go.jp/ktr_content/content/000941122.pdf'],katakuchiBio:['Honda釣り倶楽部｜カタクチイワシ','https://www.honda.co.jp/fishing/picture-book/katakuchiiwashi/']});
const evidence={
aji:['2026年9月3日の魚釣園公式記録は「アジ」。マアジへの種同定を示すものではなく、一般生態はマアジの図鑑を参照。',['parksep','daiwaLocal']],
iwashi:['施設解説の「イワシ」表記まで確認。マイワシ単独の当年釣果は確認していません。',['daiwaLocal']],
saba:['2026年10月3日の魚釣園公式記録は「サバ」。マサバ・ゴマサバのどちらかは記録だけでは断定できません。',['parkoct','daiwaLocal']],
sayori:['2026年2月の魚釣園公式記事一覧にサヨリの記録。',['parkWinter']],
kurodai:['2026年9月25日など、魚釣園公式記録にクロダイ。',['parksep','daiwaLocal']],
suzuki:['2026年9月4日の魚釣園公式記録にシーバス。',['parksep','parkfish']],
haze:['国土交通省資料は利根川河口〜河口堰下流に多いと説明。個別足場の立入・遊漁許可を意味しません。',['toneHaze']],
kawahagi:['魚釣園公式の2026年9月・10月3日に記録。一般の砂礫・根の際を探る説明は無許可護岸への誘導ではありません。',['parksep','parkoct','parkfish']],
datsu:['2026年9月13日の魚釣園公式記録にダツ。',['parksep','parkfish']],
bora:['魚釣園公式の魚種一覧と、冬の公式記録で確認。',['parkfish','parkWinter']],
anago:['DAIWAの鹿島港魚釣園解説で、対象魚として確認。',['daiwaLocal']],
kasago:['魚釣園公式の2026年9月・10月の記録に掲載。',['parksep','parkoct','parkfish']],
mebaru:['2026年9月5日などの魚釣園公式記録にメバル。細かな種までは不明です。',['parksep','parkWinter','daiwaLocal']],
hirame:['2026年9月12日・10月3日など、魚釣園公式記録にヒラメ。',['parksep','parkoct','daiwaLocal']],
sillago:['2026年9月24日の魚釣園公式記録に「キス」。一般生態はシロギスの図鑑を参照。',['parksep','parkfish','daiwaLocal']],
magochi:['魚釣園公式の魚種一覧にマゴチ。直近の釣果予報ではありません。',['parkfish']],
ishimochi:['DAIWAの施設解説でイシモチ類として確認。総称から種を確定しません。',['daiwaLocal']],
karei:['魚釣園公式の魚種一覧にマコガレイ。単に「カレイ」と記録された釣果と種を混同しません。',['parkfish','daiwaLocal']],
ainame:['DAIWAの魚釣園解説に対象魚として記載。',['daiwaLocal']],
umitanago:['2026年9月22日の魚釣園公式記録にも掲載。',['parkfish','parksep']],
mejina:['魚釣園の2026年9〜10月公式記録で確認。',['parksep','parkoct']],
buri:['魚釣園の9〜10月公式記録・魚種紹介を参照。ワカシ・イナダ・ワラサは同じブリの成長段階です。',['parksep','parkoct','parkfish']],
kanpachi:['2026年9月にショゴ・カンパチ、10月4日にもショゴの公式記録。いずれもカンパチの成長名です。',['parksep','parkoct','parkfish']],
kamasu:['魚釣園の公式魚種一覧ではカマス類と表記。細かな種は断定しません。',['parkfish']]};
for(const [id,[note,ss]] of Object.entries(evidence)){const x=ITEMS.find(x=>x.id===id);x.local=note;x.sources=[...new Set([...x.sources,...ss])];}
const kat=ITEMS.find(x=>x.id==='umazura');Object.assign(kat,{id:'katakuchi',name:'カタクチイワシ',shape:'sardine',color:'#769e9f',danger:false,seasons:'春 夏 秋',summary:'大きな口と、上あごが突き出る小魚。',food:'動物プランクトン・アミ類',identify:'上あごが下あごより前に出て、口が大きい。マイワシのような体側の黒点列はない。',method:'許可された場所で、小さな針のサビキを群れの層へ。まき餌の規制を先に確認。',warning:'小魚でも針先に注意。まき餌は指定区域と上限量を守る。',local:'鹿島港魚釣園の公式魚種一覧にカタクチイワシ。',sources:['katakuchiBio','parkfish','chum'],related:['sabiki','ami','safety']});
const iw=ITEMS.find(x=>x.id==='iwashi');iw.name='マイワシ';iw.identify='青緑の背と銀色の腹、体側の黒点列が手がかり。黒点の数や明瞭さには変異がある。カタクチイワシは口が大きい。';iw.related=['katakuchi','sabiki','ami'];
const ka=ITEMS.find(x=>x.id==='karei');ka.name='マコガレイ';ka.identify='多くは右側に両目があり、口は小さめ。ヒラメは口が大きい。左右の向きだけで全てのカレイ類を同定しない。';
const first=ITEMS.find(x=>x.id==='funa');first.name='マブナ（フナ類）';first.related.push('gengoro');
ITEMS.find(x=>x.id==='asari').related=['kawahagi','bottom','cast'];
// Current prefectural instruction: hirame-targeted live bait is restricted by latitude and season.
SOURCES.hirameLivebait=['茨城海区漁業調整委員会指示第7号｜ヒラメの活き餌釣り（2026年度）','https://www.pref.ibaraki.jp/igyocho/kaiku/documents/n696-hirameikie.pdf'];
const hirame=ITEMS.find(x=>x.id==='hirame');
hirame.food='小魚（自然界で食べるもの）';
hirame.naturalFood='小魚。これは自然界での食性です。';
hirame.baitAdvice='この手帖では海岸のルアー釣りを案内しています。活き餌でヒラメを狙う場合は、海域と時期による禁止を先に確認してください。';
hirame.warning='茨城海面は全長30cm未満を採捕しない。ヒラメ狙いの活き餌釣りは、北緯35度52分以上・36度00分未満で4/1〜10/31、35度52分より南で4/1〜11/30は禁止。北側にも区域別の禁止があります。指示の有効期間は2026/4/1〜2027/3/31。詳しくは「地域のルールと安全」と原典を確認。鋭い歯に素手を近づけない。';
hirame.sources.push('hirameLivebait');
const regionalSafety=ITEMS.find(x=>x.id==='safety');
regionalSafety.sections.splice(4,0,
 ['ヒラメ狙いの活き餌釣り：対象と有効期間','茨城県海面では、ヒラメの採捕を目的に活き餌を使う釣りに、緯度ごとの禁止期間があります。2026年度の指示第7号は2026年4月1日〜2027年3月31日が有効期間。魚の一般的な釣期や、過去の釣果があることは、活き餌釣りが許される根拠になりません。'],
 ['ヒラメの活き餌釣り：南側の区域','北緯35度52分以上・36度00分未満の茨城県海面：4月1日〜10月31日は禁止。北緯35度52分より南の茨城県海面：4月1日〜11月30日は禁止。神栖・鹿嶋という市名だけで判断せず、実際に釣る海域の緯度と原典を確認してください。'],
 ['ヒラメの活き餌釣り：北側の区域','北緯36度00分以上・36度32分未満：4月1日〜11月30日は禁止。北緯36度32分以上・36度50分未満：1月1日〜12月31日は禁止。北緯36度50分以上：4月1日〜11月30日は禁止。いずれも茨城県海面が対象です。最新の指示、釣り場の立入・釣法制限も確認してください。']);
regionalSafety.sources.push('hirameLivebait');
const fishBait=ITEMS.find(x=>x.id==='fishbait');
fishBait.sections.push(['ヒラメを活き餌で狙う前に','ヒラメ狙いの活き餌釣りは、茨城県海面で区域・時期による禁止があります。南側は北緯35度52分以上・36度00分未満が4/1〜10/31、35度52分より南が4/1〜11/30は禁止。北側の区域も含め「地域のルールと安全」と指示第7号を確認してください。有効期間は2026/4/1〜2027/3/31。']);
fishBait.sources.push('hirameLivebait');
fishBait.related.push('hirame','safety');
ITEMS.find(x=>x.id==='sources').sources=Object.keys(SOURCES);

ITEMS.find(x=>x.id==="breakage").keywords="糸切れ ラインブレイク サルカン 結束 切れる 抜ける";
for(const x of ITEMS){x.related=(x.related||[]).filter(id=>ITEMS.some(t=>t.id===id));}
