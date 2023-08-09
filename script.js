const targetNumber = Math.floor(Math.random() * 100);
let number;
let urunish = +prompt(`Necha martada topaman deb o'ylaysiz`);
let taxmin = 1;

do {
  number = +prompt(
    `taxminiy son kiriting 100 dan 1 gacha urunishlar soni ${urunish}`
  );
  if (number === targetNumber) {
    if (taxmin <= 3) {
      console.log(
        `juda yaxshi siz omadli inson ekansiz ${taxmin} - urinishda topdingiz bu son ${number}`
      );
    } else if (taxmin > 3 && taxmin <= 6) {
      console.log(
        `sal omadsiz urunish ammo niasbatan yaxshi ${taxmin} - urinishda topdingiz bu son ${number}`
      );
    } else {
      console.log(
        `juda omadsiz urunish ${taxmin} - urinishda topdingiz bu son ${number}`
      );
    }
  } else if (number < targetNumber) {
    console.log(`Kiritgan sonigiz ${number} kataroq son kiriting`);
  } else if (number > targetNumber) {
    console.log(`Kiritgan sonigiz ${number} kichikroq son kiriting`);
  }
  if (urunish == 1) {
    console.log(
      `Siz beril ${taxmin} inkoniyatan biror tasida topa olmadingiz bu son ${targetNumber}`
    );
  }
  taxmin++;
  urunish--;
} while (urunish && number !== targetNumber);
