interface Rectangle {
  length: number;
  width: number;
}

interface Parallelepiped extends Rectangle {
  height: number;
}

const parallelepiped: Parallelepiped = {
  length: 5,
  width: 6,
  height: 3,
};
