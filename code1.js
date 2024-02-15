gdjs.memory_95introCode = {};
gdjs.memory_95introCode.GDNewTextObjects1= [];
gdjs.memory_95introCode.GDNewTextObjects2= [];
gdjs.memory_95introCode.GDNewSpriteObjects1= [];
gdjs.memory_95introCode.GDNewSpriteObjects2= [];
gdjs.memory_95introCode.GDNewSprite2Objects1= [];
gdjs.memory_95introCode.GDNewSprite2Objects2= [];
gdjs.memory_95introCode.GDNewText2Objects1= [];
gdjs.memory_95introCode.GDNewText2Objects2= [];
gdjs.memory_95introCode.GDNewText3Objects1= [];
gdjs.memory_95introCode.GDNewText3Objects2= [];
gdjs.memory_95introCode.GDNewSprite3Objects1= [];
gdjs.memory_95introCode.GDNewSprite3Objects2= [];
gdjs.memory_95introCode.GDNewText4Objects1= [];
gdjs.memory_95introCode.GDNewText4Objects2= [];
gdjs.memory_95introCode.GDNewSprite4Objects1= [];
gdjs.memory_95introCode.GDNewSprite4Objects2= [];
gdjs.memory_95introCode.GDNewText5Objects1= [];
gdjs.memory_95introCode.GDNewText5Objects2= [];
gdjs.memory_95introCode.GDNewSprite5Objects1= [];
gdjs.memory_95introCode.GDNewSprite5Objects2= [];
gdjs.memory_95introCode.GDNewText6Objects1= [];
gdjs.memory_95introCode.GDNewText6Objects2= [];
gdjs.memory_95introCode.GDNewSprite6Objects1= [];
gdjs.memory_95introCode.GDNewSprite6Objects2= [];
gdjs.memory_95introCode.GDNewText7Objects1= [];
gdjs.memory_95introCode.GDNewText7Objects2= [];
gdjs.memory_95introCode.GDNewSprite7Objects1= [];
gdjs.memory_95introCode.GDNewSprite7Objects2= [];
gdjs.memory_95introCode.GDNewText8Objects1= [];
gdjs.memory_95introCode.GDNewText8Objects2= [];
gdjs.memory_95introCode.GDNewSprite8Objects1= [];
gdjs.memory_95introCode.GDNewSprite8Objects2= [];
gdjs.memory_95introCode.GDNewText9Objects1= [];
gdjs.memory_95introCode.GDNewText9Objects2= [];
gdjs.memory_95introCode.GDmemory_9595pret_9595jouerObjects1= [];
gdjs.memory_95introCode.GDmemory_9595pret_9595jouerObjects2= [];
gdjs.memory_95introCode.GDNewText10Objects1= [];
gdjs.memory_95introCode.GDNewText10Objects2= [];


gdjs.memory_95introCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("memory_pret_jouer"), gdjs.memory_95introCode.GDmemory_9595pret_9595jouerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.memory_95introCode.GDmemory_9595pret_9595jouerObjects1.length;i<l;++i) {
    if ( gdjs.memory_95introCode.GDmemory_9595pret_9595jouerObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.memory_95introCode.GDmemory_9595pret_9595jouerObjects1[k] = gdjs.memory_95introCode.GDmemory_9595pret_9595jouerObjects1[i];
        ++k;
    }
}
gdjs.memory_95introCode.GDmemory_9595pret_9595jouerObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MemoryScene", false);
}}

}


};

gdjs.memory_95introCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.memory_95introCode.GDNewTextObjects1.length = 0;
gdjs.memory_95introCode.GDNewTextObjects2.length = 0;
gdjs.memory_95introCode.GDNewSpriteObjects1.length = 0;
gdjs.memory_95introCode.GDNewSpriteObjects2.length = 0;
gdjs.memory_95introCode.GDNewSprite2Objects1.length = 0;
gdjs.memory_95introCode.GDNewSprite2Objects2.length = 0;
gdjs.memory_95introCode.GDNewText2Objects1.length = 0;
gdjs.memory_95introCode.GDNewText2Objects2.length = 0;
gdjs.memory_95introCode.GDNewText3Objects1.length = 0;
gdjs.memory_95introCode.GDNewText3Objects2.length = 0;
gdjs.memory_95introCode.GDNewSprite3Objects1.length = 0;
gdjs.memory_95introCode.GDNewSprite3Objects2.length = 0;
gdjs.memory_95introCode.GDNewText4Objects1.length = 0;
gdjs.memory_95introCode.GDNewText4Objects2.length = 0;
gdjs.memory_95introCode.GDNewSprite4Objects1.length = 0;
gdjs.memory_95introCode.GDNewSprite4Objects2.length = 0;
gdjs.memory_95introCode.GDNewText5Objects1.length = 0;
gdjs.memory_95introCode.GDNewText5Objects2.length = 0;
gdjs.memory_95introCode.GDNewSprite5Objects1.length = 0;
gdjs.memory_95introCode.GDNewSprite5Objects2.length = 0;
gdjs.memory_95introCode.GDNewText6Objects1.length = 0;
gdjs.memory_95introCode.GDNewText6Objects2.length = 0;
gdjs.memory_95introCode.GDNewSprite6Objects1.length = 0;
gdjs.memory_95introCode.GDNewSprite6Objects2.length = 0;
gdjs.memory_95introCode.GDNewText7Objects1.length = 0;
gdjs.memory_95introCode.GDNewText7Objects2.length = 0;
gdjs.memory_95introCode.GDNewSprite7Objects1.length = 0;
gdjs.memory_95introCode.GDNewSprite7Objects2.length = 0;
gdjs.memory_95introCode.GDNewText8Objects1.length = 0;
gdjs.memory_95introCode.GDNewText8Objects2.length = 0;
gdjs.memory_95introCode.GDNewSprite8Objects1.length = 0;
gdjs.memory_95introCode.GDNewSprite8Objects2.length = 0;
gdjs.memory_95introCode.GDNewText9Objects1.length = 0;
gdjs.memory_95introCode.GDNewText9Objects2.length = 0;
gdjs.memory_95introCode.GDmemory_9595pret_9595jouerObjects1.length = 0;
gdjs.memory_95introCode.GDmemory_9595pret_9595jouerObjects2.length = 0;
gdjs.memory_95introCode.GDNewText10Objects1.length = 0;
gdjs.memory_95introCode.GDNewText10Objects2.length = 0;

gdjs.memory_95introCode.eventsList0(runtimeScene);

return;

}

gdjs['memory_95introCode'] = gdjs.memory_95introCode;
