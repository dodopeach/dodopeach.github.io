function TileDecorator() {
  function BlankSquare() {
    return <div class="blank_square"></div>;
  }
  function ColoredSquare() {
    return <div class="colored_square"></div>;
  }
  function toBox(c) {
    if (c === 0) return <BlankSquare />;
    else return <ColoredSquare />;
  }
  const tiles = [
    [0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
  ];
  return (
    <>
      <div>
        <table>
          <tbody>
            {tiles.map((item) => {
              return (
                <tr>
                  {item.map((box) => {
                    return <td>{toBox(box)}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export { TileDecorator };
