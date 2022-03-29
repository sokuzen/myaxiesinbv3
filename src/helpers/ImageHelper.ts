import { AxiePart } from '@/interfaces'

export class ImageHelper {
    static getImage(imgPath: string): string {
        let img = null;
        console.log(`@/assets/${imgPath}`);
        try {
          img = require(`@/assets/${imgPath}`); // Cannot use a variable as a parameter since the compiler throws a warning        
          console.log("success?");  
        } catch {
          img = ImageHelper.getDefaultImage();
        }
    
        return img;
      }

    static getOriginImagePath(axiePart: AxiePart): string {
        return ImageHelper.getImage(`cards/${
            axiePart.type?.toLowerCase()
        }/${
            axiePart.name?.toLowerCase().replace(/[?\s]/g, "")}.png`);
    }

    static getDefaultImage(): string {
        return require("@/assets/placeholder.svg");
    }
}