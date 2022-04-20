import React, { useEffect } from "react";
import { Container } from "../styles/GlobalStyled";

// função para a página renderizar no topo
const jumpToTop = () => {
  window.scrollTo({
    top: 0,
  });
};

const MoviesAbout = () => {
  useEffect(() => {
    jumpToTop();
  }, []);

  return (
    <Container>
      <div style={{ marginTop: "10%", minHeight: "90vh" }}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          illum veritatis quisquam accusantium praesentium ab laboriosam nobis
          mollitia obcaecati expedita? Architecto explicabo animi cupiditate
          ipsam culpa dignissimos. Accusamus, sed nemo autem vitae velit quae
          animi dolorem commodi est exercitationem odit! Quas dolorum architecto
          sit asperiores dolore! Inventore adipisci alias, libero voluptatum
          repellat dolor corporis saepe qui tempore eos doloribus quisquam. Quis
          facilis iusto odio neque? Voluptatem nisi optio porro unde animi
          voluptas nesciunt saepe officia expedita laudantium, cupiditate libero
          perferendis illum repudiandae excepturi non, alias vel quis ut.
          Delectus aut sit ipsa, id molestiae laborum. Nobis, quos nostrum
          minima odio harum illum quia accusantium? Ab, soluta.
        </p>
      </div>
    </Container>
  );
};

export default MoviesAbout;
