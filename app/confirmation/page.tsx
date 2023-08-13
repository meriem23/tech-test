import Greetings from "@/components/greetings/greetings";

function Confirmation() {
  return (
    <div>
      <Greetings
        title="Inscrivez-vous pour pouvoir continuer votre parcours"
        subTitle="Déjà inscrit ?"
        titleLink="Connectez-vous"
        subTitleLink="login"
      />
    </div>
  );
}

export default Confirmation;
