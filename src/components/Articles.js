import React from 'react';

function Articles({ displayArticle }) {
  return (
    <div style={{ width: '700px' }}>
      <h1 className="mb-20">Liste des articles</h1>
      {displayArticle ? (
        <div className="card p-20">
          <h2 className="mb-10">Titre de l'article</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            consectetur asperiores dicta iusto inventore eius corrupti eum! Iste
            doloremque delectus voluptas quos. Et at consectetur similique
            suscipit officiis cum asperiores? Sunt maxime repudiandae quaerat
            debitis. Nobis asperiores, soluta perferendis voluptatibus vel
            dignissimos optio ipsam repellat repellendus tenetur illo
            blanditiis, modi placeat non consequuntur quibusdam dolorum,
            temporibus quod suscipit.
          </p>
        </div>
      ) : (
        <p>Aucun article</p>
      )}
    </div>
  );
}

export default Articles;
