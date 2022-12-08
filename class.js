export const listeIngredients = [];

export class Aliment {
  constructor(name, prot) {
    this.name = name;
    this.prot = prot;
    listeIngredients.push(this);
  }
}

const Filet_De_Poulet = new Aliment("Filet de poulet", 23);
const Filet_De_Dinde = new Aliment("Filet de dinde", 20);
const Filet_De_Pengiasus = new Aliment("Filet de pengasius", 16);
const Thon_Petite_Boite = new Aliment("Petite boite de thon", 23);
const Grande_Boite_De_Thon = new Aliment("Grande boite de thon", 24);
const Dinde = new Aliment("Dinde", 23);
const Tilapia = new Aliment("Filet de Tilapia", 20);
const Oeuf = new Aliment("Oeuf", 6);
const Blanc_Oeuf = new Aliment("Blanc d'oeuf", 4);
const Americain_Nature = new Aliment("Américain nature", 22);
const Limande = new Aliment("Filet de limande", 12);
const Flocons_Avoine = new Aliment("Flocons d'avoine", 14);
const Pecorino = new Aliment("Pecorino", 25);
const Noix = new Aliment("Noix", 14);
const Noix_Pecan = new Aliment("Noix de pécan", 16);
const Yahourt_Nature = new Aliment("Yahourt nature", 5);
const Yahourt_Nature_Maigre = new Aliment("Yahourt nature maigre", 6);
const Pain_De_Seigle = new Aliment("Pain de seigle", 9);


