import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const recipeAuthor = "Kodluyoruz";
  const recipeItem = {
    title: "Konya Usulü Etli Ekmek",
    date: "4 Haziran 2021, Cuma",
    image: "https://i.lezzet.com.tr/images-xxlarge-recipe/konya-usulu-etli-ekmek-9243d573-8155-432c-b2c7-a853e60975cf.jpg",
    description:
      "Konya'nın sembolü haline gelen nefis etli ekmek nasıl yapılır? İncecik hamuruyla sofraları renklendiren, eti sayesinde hem mideleri hem de gözleri doyuran bir tarifle karşınızdayız.",
  };

  const likeCount = 61;
  const isLiked = true;



  return (
    <div className="App">
      <header className="App-header">
        <Card
          author={recipeAuthor}
          title={recipeItem.title}
          date={recipeItem.date}
          image={recipeItem.image}
          description={recipeItem.description}
          likeCount={likeCount}
          isLiked={isLiked}
        />
      </header>
    </div>
  );
}

export default App;
