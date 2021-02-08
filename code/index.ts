interface Parallelepiped {
  length: number;
  width: number;
  height: number;
}

interface Texture {
  material: string;
  aspect: string;
}

interface Brick extends Parallelepiped, Texture {
  color: string;
  weight: number;
}

const brick1: Brick = {
  length: 5,
  width: 6,
  height: 3,
  weight: 1.6,
  aspect: "brillant",
};
/* Type '{ length: number; width: number; height: number; weight: number; aspect: string; }' is missing the following properties from type 'Brick': color, material */
