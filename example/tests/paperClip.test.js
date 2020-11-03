
import { Element, Helpers } from "test-juggler";

describe("Paper clips test", () => {
    it("Test paper clips", async () => {
        const marketingButton = new Element("//*[@id='btnExpandMarketing']");
        const wireButton = new Element("//*[@id='btnBuyWire']");
        const lowerPriceButton = new Element("//*[@id='btnLowerPrice']");
        const makePaperClipsButton = new Element("//*[@id='btnMakePaperclip']");
        const makeAutoClippersButton = new Element("//*[@id='btnMakeClipper']");
        const countedPaperClips = new Element("//*[@id='clipCountCrunched']");
        const begForWire = new Element("//*[@id='projectButton2']");
        const improveAutoCipler = new Element("//*[@id='projectButton1']");
        await page.goto("https://www.decisionproblem.com/paperclips/index2.html");
        await page.waitFor(1600);
        await countedPaperClips.isVisible();
        const paperClipsCounter = await countedPaperClips;
        let clips = await paperClipsCounter.getAttributeValue('innerText');
        console.log("Savarzele", clips);
        var j;
        for (j = 0; j < 12; j++) {
            await lowerPriceButton.click();
        }
        while(clips !== 10000){
           
            while (await makeAutoClippersButton.isVisible() === false) {
                
                    var i;
                    for (i = 0; i < 5; i++) {
                        if(await makePaperClipsButton.isVisible() === false){
                            await lowerPriceButton.click();
                            await lowerPriceButton.click();
                            await lowerPriceButton.click();
                            await lowerPriceButton.click();
                            await lowerPriceButton.click();
                            await lowerPriceButton.click();
                        }else{
                            await makePaperClipsButton.click();
                        }
                       
                       
                    }
            
            }
            if (await makeAutoClippersButton.isVisible()) {
                await makeAutoClippersButton.click();
            }
            if (await wireButton.isVisible()) {
                await wireButton.click();
            }
          
            if (await begForWire.isVisible()) {
                await begForWire.click();
            }
            
            if (await improveAutoCipler.isVisible()) {
                await improveAutoCipler.click();
            }
        }
        
        await page.waitFor(3600);
    });
})