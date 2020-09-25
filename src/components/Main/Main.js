import React, { useState } from "react";
import Backdrop from "../Header/BackDrop/Backdrop";
import SideDrawer from "../Header/BackDrop/SideDrawer";
import Header from "../Header/Header";
import { motion, AnimatePresence } from "framer-motion";

// Logo fade in animation
const backDropVariants = {
  initial: {
    x: "200vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "200vw",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

// Nav dropDown animation

const Main = () => {
  const [mbl_menu, setMbl_menu] = useState(false);

  return (
    <div style={{ height: "100%" }}>
      <Header setMbl_menu={setMbl_menu} mbl_menu={mbl_menu} />
      {mbl_menu && <Backdrop setMbl_menu={setMbl_menu} mbl_menu={mbl_menu} />}
      <AnimatePresence>
        {mbl_menu && (
          <motion.div
            className="sideDrawer"
            variants={backDropVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <SideDrawer setMbl_menu={setMbl_menu} mbl_menu={mbl_menu} />
          </motion.div>
        )}
      </AnimatePresence>
      <p style={{ color: "white", marginTop: "80px" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam soluta
        reprehenderit blanditiis odio qui, dicta id odit, sint rem perferendis
        similique dolore? Pariatur, similique magnam ipsa dolore doloremque
        voluptates eligendi explicabo, eos voluptatem exercitationem laudantium
        odit harum, veniam officia modi. At architecto, quae maiores, itaque
        eveniet eum quidem minus, molestias accusamus nam ratione alias? Sint
        voluptatum veniam praesentium dolorum, nihil facere consequatur
        reiciendis atque commodi, ratione corporis eius placeat ab doloribus vel
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia et
        ducimus nam adipisci commodi atque quo corporis eum excepturi
        consequatur libero cupiditate error, eligendi tempora ipsum deleniti
        saepe deserunt a perferendis accusamus perspiciatis odio quod. Placeat,
        ipsa necessitatibus. Non, fugiat nobis sunt quam omnis ut a officia
        deleniti dolor perferendis atque pariatur eius quia, magni, laborum
        culpa aut eligendi temporibus labore tempora provident. Quisquam ullam
        voluptate reiciendis ex fugiat, unde sapiente aspernatur officiis omnis
        hic reprehenderit, tenetur, quasi recusandae assumenda consequatur earum
        commodi id beatae. Ab, repudiandae deserunt voluptates suscipit expedita
        reiciendis laborum excepturi quas libero, eaque rem? Dolores aspernatur
        laborum neque eaque facilis libero accusamus quas recusandae!
        Doloremque, voluptatum hic. Repellendus voluptates accusantium cum sequi
        quaerat hic voluptatum aut doloribus atque aliquam, minima ea nobis iure
        excepturi accusamus cumque commodi corporis? Sit natus necessitatibus,
        vitae quis delectus magnam ea explicabo enim nisi deserunt iusto neque
        eum eaque libero fuga! Reprehenderit impedit possimus, ea quam nihil,
        ipsa omnis obcaecati expedita veniam cum voluptatibus magni ullam quia
        sit beatae soluta velit. Corrupti dolorum temporibus voluptatibus esse
        tempora, nostrum quis nesciunt, aut quasi at sunt voluptatum eligendi
        odit id ab commodi dignissimos optio illo ducimus inventore officiis
        pariatur. Maiores minus nulla eum dolor? Eos, nostrum? Obcaecati
        eligendi consequatur doloribus perspiciatis incidunt expedita neque?
        Animi, cupiditate nulla assumenda consequuntur itaque quos voluptatum
        quasi! Quia eaque labore assumenda doloremque molestiae totam, rerum
        recusandae, nisi voluptatibus vitae autem similique pariatur accusamus
        facilis minus beatae, voluptates nihil enim architecto quis. Commodi
        itaque quod adipisci autem aliquam pariatur, quis libero, magni nihil
        eos laudantium. Ipsam voluptas nisi doloremque rerum quasi in, sapiente
        consequatur maiores blanditiis sunt placeat cum, assumenda reiciendis
        facilis alias unde libero molestiae. Ducimus, illo quod eius sequi
        eveniet aspernatur minus iste veritatis ea maiores. Sapiente aperiam
        libero cum ab? Quisquam facere deleniti autem iure rerum sapiente veniam
        esse necessitatibus recusandae incidunt nemo minus impedit aliquid,
        ullam repudiandae repellat ipsum eligendi in laborum? Veniam laboriosam
        corrupti vero magni, sit, animi tempora est vel nostrum minima adipisci
        doloremque dolore neque dignissimos tenetur deleniti molestias beatae
        eius rerum mollitia maiores quam sed cum! Non aspernatur exercitationem
        animi pariatur illum sint rerum tempora sapiente repudiandae culpa
        iusto, libero consectetur quo voluptate quasi velit ad illo aliquid
        fugit architecto unde magnam dolore veritatis quam. Error ratione
        mollitia nostrum similique commodi reiciendis debitis consectetur quia
        maxime eum officiis officia repudiandae aperiam praesentium non, iure,
        quis ea, facere quos! Veniam possimus inventore minus culpa distinctio
        repellendus placeat voluptatem et dignissimos expedita magni dicta,
        neque nemo mollitia suscipit debitis repudiandae excepturi quis impedit
        velit vitae id perferendis natus ex. Ipsum voluptatem laudantium soluta
        saepe exercitationem, aperiam, minima magnam atque adipisci tempore hic
        tempora? Itaque distinctio aspernatur voluptatem perferendis impedit,
        laborum quo fugit iure doloremque quidem enim ullam, ex eius ut, maxime
        cum tempore odit tenetur sunt numquam veritatis? Alias rem voluptates
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste veniam
        accusantium placeat expedita dolorum reiciendis velit quae possimus
        dicta ducimus ratione, inventore necessitatibus quis ipsam repudiandae
        odio cum beatae suscipit laborum. Iusto nostrum cum alias, at rem,
        veniam nemo fugiat, eaque quis dolor itaque? Cumque quis cum
        necessitatibus impedit sed et autem veniam reiciendis iusto esse neque,
        libero vel vitae nesciunt, quod officiis eius ut repellat repellendus.
        Sapiente aspernatur vero, provident consequatur voluptate excepturi quo
        dicta impedit obcaecati esse, necessitatibus quas at facere hic tempora?
        Veritatis asperiores aspernatur nulla dignissimos non? A corporis modi
        pariatur? At ad neque vero mollitia voluptatum sequi animi placeat
        facilis architecto. Dicta magni quo excepturi odit architecto. Nulla
        dolorem facilis praesentium, iusto maiores corporis! Eius, earum eveniet
        debitis illo blanditiis eum iste harum quasi ipsa quis corporis mollitia
        numquam placeat voluptas quae animi omnis optio delectus accusamus
        sapiente quos minima quas. Expedita esse ratione, sint iste pariatur a
        rem fuga error officiis corrupti nesciunt in magnam nobis facere ducimus
        placeat quibusdam vitae cupiditate perferendis aut laudantium illo
        eaque? Possimus incidunt corrupti consequatur molestias, qui, vitae sit
        earum eius iste harum, tempore dignissimos animi suscipit voluptatibus
        sequi iusto architecto. Iusto modi expedita assumenda repudiandae beatae
        voluptatibus dolor quidem velit, est sequi dignissimos, ullam voluptas!
        Tenetur eaque fuga consectetur, aut molestiae vel ad numquam, magnam
        quasi doloremque nobis? Aperiam corporis aspernatur odio distinctio
        adipisci? Quae fuga libero assumenda iure neque commodi accusamus
        soluta, earum eveniet accusantium placeat culpa voluptatem doloribus
        mollitia facere praesentium pariatur itaque ratione. Nisi quo reiciendis
        quos quam aut enim, ea, fugiat officiis nemo praesentium fuga veritatis
        beatae ad. Consequatur voluptatum eos quidem cumque voluptate! Ut ipsum
        omnis amet exercitationem necessitatibus, voluptatibus eveniet harum
        fugit alias eius sapiente quos sed blanditiis, assumenda commodi esse.
        Reiciendis autem commodi dolorum facere iste architecto adipisci
        temporibus nobis et, totam vero deleniti! Eos a facilis, ad adipisci
        quaerat, dolorum, dicta nobis sunt saepe inventore blanditiis molestiae
        dolore quia voluptatibus quibusdam. In ut quasi officiis voluptatum.
        Ipsa amet nemo corrupti vel ipsam magni maxime unde soluta velit aperiam
        doloremque, nobis veritatis. Voluptates, aspernatur minus illo aut quia
        fugiat consectetur maxime excepturi iste? Praesentium deleniti omnis,
        cumque veniam dolore nesciunt expedita vel, corporis nisi possimus enim
        in qui sed cupiditate sunt doloribus quo illo minima repudiandae vero
        tenetur dolorem consequuntur. Repellat quo quos quasi aliquid. Ad
        eveniet, dolore commodi quisquam consequuntur iusto! Incidunt maxime
        obcaecati sed, voluptates cumque doloribus? Dicta facilis maxime non
        nulla tenetur soluta sapiente architecto rem aliquid illum rerum omnis
        eos distinctio beatae voluptatum, repellendus necessitatibus dignissimos
        veritatis doloremque magni atque facere? Similique id ex alias nostrum
        quae blanditiis voluptas ab obcaecati veniam est voluptatibus,
        distinctio commodi magnam nemo, debitis sit totam illo iure ut fugiat.
        Quaerat aut pariatur, animi vitae illo numquam delectus dignissimos quia
        soluta cumque. Veritatis beatae id mollitia ducimus hic saepe blanditiis
        ipsa vitae neque tempore illum dolor, excepturi a! Labore est eos optio
        fugit voluptas recusandae perferendis, laboriosam molestiae totam
        placeat delectus corporis numquam dicta repudiandae sint porro ducimus
        tempora! Obcaecati exercitationem maxime eligendi quis vitae minus
        labore sint, nobis molestiae ratione culpa at, modi laudantium
        accusantium eos optio iusto delectus magni quaerat commodi quia non
        dolore repellendus temporibus! Voluptas sint dolores minima eveniet
        corrupti totam nobis dicta similique, cum velit adipisci blanditiis
        error voluptates consequuntur. Eveniet hic quo explicabo ut illo ipsam
        voluptas ab dolorum quam accusamus inventore, omnis nulla, cum atque,
        amet adipisci commodi facere. Esse neque dignissimos veniam ex quia enim
        architecto corrupti reprehenderit ullam molestiae odit facilis sint
        doloremque nisi, ipsa labore maxime blanditiis. Animi tempore laborum,
        labore ex, cum obcaecati nihil ea fugit explicabo delectus quo similique
        facilis ducimus accusantium sunt quis nobis non aliquid rerum voluptatum
        recusandae quisquam harum laboriosam officiis. Fugit, odit vitae
        excepturi magnam quae vero nulla temporibus. Deserunt harum beatae
        quibusdam adipisci voluptatum? Excepturi odio veritatis voluptate ipsum
        reprehenderit eos eius. Dignissimos accusamus ab fuga ea, blanditiis et
        natus? Excepturi illo animi eveniet assumenda quisquam? Debitis
        laudantium est vitae ea delectus, asperiores culpa sunt perferendis sit.
        Sit, ullam! Distinctio asperiores accusamus pariatur ea maxime sint,
        sunt eaque, porro ut, quod iure in architecto tempora quas. Officia,
        error accusantium impedit reiciendis consequuntur dolor eaque? Magni
        voluptatem cum perferendis, dolor odio placeat reprehenderit
        exercitationem dicta quod reiciendis voluptatum a quam odit minima ipsam
        repudiandae officiis ab temporibus tempore molestias numquam nulla aut,
        et eum? Repellendus voluptatum vel, facilis iure facere, voluptate,
        ullam distinctio itaque est eveniet dolorem quam consectetur iste
        laborum? Cupiditate dolore nemo laudantium, animi voluptate nobis
        officiis velit provident modi dignissimos. Earum, sequi exercitationem?
        Rem iste quasi doloremque corporis, quod ipsam aspernatur vitae
        voluptatum nisi iusto pariatur nam enim veritatis suscipit dolorum
        placeat magnam est veniam aut cupiditate blanditiis corrupti minima
        atque. Illo ipsum, eum quae itaque eveniet hic maiores eius fugiat ex
        perferendis nulla atque dolorem quod reiciendis enim modi maxime quo
        quas aut numquam magnam non facilis beatae. Et, nihil veritatis debitis
        officia nam incidunt est dolor, minima earum a iure aperiam dolorem
        ipsum. Ipsam eveniet aperiam eaque suscipit voluptatibus reiciendis, hic
        tempore deserunt nesciunt pariatur accusantium nobis. Accusantium magni
        nostrum, neque nihil tenetur quos enim repellendus ratione in. Tempore
        esse, inventore accusamus neque dolor quibusdam quasi perspiciatis
        laudantium, maiores magni repudiandae tempora praesentium nulla
        similique facilis accusantium. Numquam maxime similique quos quasi ipsa,
        eos amet repudiandae et. Voluptate consectetur quia voluptatem debitis
        voluptatum beatae nihil blanditiis doloribus est odio totam repellat
        vitae natus, ratione tempore perferendis quos! Nobis totam, enim optio
        libero perferendis minima voluptatum assumenda eveniet in deleniti
        necessitatibus, commodi nam! Sequi necessitatibus nostrum facilis
        dolore, voluptas natus quidem cupiditate. Incidunt, libero deserunt
        dignissimos iure ex ut molestiae quidem quisquam a architecto delectus.
        Unde voluptatibus perferendis, dignissimos incidunt temporibus harum
        doloremque labore. Veritatis doloribus sunt ad consequuntur nulla
        temporibus dolorem deleniti quia esse. Qui obcaecati dolorum esse,
        adipisci nemo possimus laboriosam harum aliquid recusandae facilis
        veniam quae explicabo numquam repellat iure exercitationem vero magni.
        Corporis earum suscipit sequi vitae perferendis nam soluta unde odio,
        eveniet aspernatur rem, consequuntur dolore hic, impedit quidem?
        Corrupti eaque consectetur a sunt neque nisi? neque sit doloremque.
        Quasi minima ut iure animi nemo iusto esse vero vel sunt labore ducimus
        similique, officiis alias officia, blanditiis aliquid quos voluptates
        laudantium asperiores repellat velit debitis! Sunt odio cumque dolores
        accusamus eum molestias accusantium quidem molestiae id ex pariatur
        exercitationem ea ad, quia debitis dolore quis dolor facere fuga
        sapiente nam tenetur illum ipsa? Qui, nisi harum! Harum suscipit dolores
        cupiditate iusto aperiam asperiores praesentium laboriosam
        exercitationem porro recusandae numquam quidem nam, libero doloribus
        impedit ex ipsam! Vero ducimus perferendis, natus suscipit dolorem,
        porro repellendus quis obcaecati, dolore temporibus minima omnis neque!
        Aspernatur perspiciatis, facere similique ad qui corporis fugiat alias
        assumenda, corrupti laboriosam maiores. Ipsa libero fugiat dolores,
        molestiae dicta eos vel tempore minus culpa quibusdam, placeat numquam
        quae earum ratione magnam nulla. Reprehenderit nihil beatae itaque
        totam, cumque quod aspernatur placeat quos nemo! Ducimus dolore quia
        quisquam ea. Esse reprehenderit sapiente totam perferendis molestias
        facere, nesciunt eos commodi nisi quod! Quisquam adipisci iusto modi
        tempora, deleniti aut commodi rem. Ab perferendis vel inventore voluptas
        natus nisi? Sint veritatis quisquam nostrum. Eum iusto alias, quidem qui
        laudantium, ab excepturi laborum provident voluptas sint et culpa
        doloremque! Praesentium aliquid tenetur at blanditiis excepturi eaque
        iure illum vero repellat nisi sit cumque minima repudiandae quos,
        explicabo dolores rem repellendus velit cum ut natus! Unde a quasi quae
        aspernatur tenetur rerum magni deleniti, cupiditate facere aliquam,
        asperiores quaerat reiciendis omnis incidunt id corporis repudiandae
        commodi voluptates doloremque veritatis amet laboriosam minus
        exercitationem. Quia ab quisquam rerum id perferendis accusamus
        praesentium voluptas labore atque ut obcaecati excepturi nostrum ullam,
        perspiciatis architecto, nisi ad velit iure. Vitae ullam dolores eos
        modi fugiat officiis, saepe voluptatem iusto, id est temporibus ut
        beatae sunt eligendi praesentium. Illo, eligendi, vitae doloribus non
        aperiam quia quasi reprehenderit fugiat minus doloremque modi voluptas.
        Eaque, consectetur at dolore minima animi iste hic. Autem excepturi
        minus nemo maxime iure officiis corrupti eius, quis, vel eum molestiae,
        ratione officia. Nostrum veritatis cupiditate distinctio soluta expedita
        quidem delectus ipsam repellendus dolor nobis, quam tempora sapiente
        obcaecati placeat quaerat rerum ducimus vero possimus voluptate neque
        nulla alias. Provident, ipsum? Eligendi totam, harum doloribus
        consectetur sunt culpa corrupti aliquam. Quaerat molestiae facere
        aliquam adipisci quasi commodi, itaque amet nobis voluptatem ad
        quibusdam debitis velit alias quos nemo. Corrupti molestiae, sint atque
        enim impedit, vel ea porro repellat dolorum temporibus eius, unde
        tenetur. Officiis voluptatem quaerat doloremque aut molestiae suscipit
        omnis quibusdam animi a recusandae reiciendis optio eaque minima saepe
        rem deserunt obcaecati similique amet, veritatis consequuntur laboriosam
        dolorem accusantium officia incidunt. Officia minus blanditiis
        voluptates molestiae possimus, nisi quod? Nemo blanditiis mollitia nisi
        a modi beatae nulla qui quibusdam suscipit exercitationem fugiat quia,
        ipsa numquam reprehenderit tempora veniam velit nobis ut? Cumque
        delectus ea a praesentium et aspernatur ad sequi molestiae corrupti
        sint! At, unde fuga? Perferendis assumenda tempora labore debitis vero
        quibusdam vitae ducimus. Exercitationem sit amet veniam. Tempore optio
        nisi recusandae sunt? Recusandae amet quas optio perspiciatis quidem
        quasi molestias mollitia laborum dolore perferendis, architecto ducimus
        accusamus voluptatem autem fugit asperiores vel accusantium suscipit
        exercitationem expedita in facere alias nostrum assumenda! Quo culpa
        delectus autem architecto fuga cum vitae magnam ullam laudantium
        nesciunt voluptatibus, doloremque saepe, blanditiis ea rerum consectetur
        iusto. esse cum tempore, corrupti quam assumenda doloremque illum nisi
        eum animi? Recusandae, vitae esse? Fuga ea odit maxime beatae labore
        voluptatum quam obcaecati voluptatibus cupiditate nostrum, reiciendis
        soluta nulla sint excepturi a quibusdam quia incidunt! Cumque, iusto id
        odio distinctio exercitationem quo delectus voluptatum tempora ut
        perspiciatis excepturi accusamus dolorem labore aperiam itaque officiis
        quia repudiandae temporibus rem ratione deleniti architecto libero
        quaerat reprehenderit! Cupiditate nihil illo dolorum adipisci ullam et,
        sed at ex quam aut reiciendis consectetur quisquam nostrum dolorem
        repellendus sunt necessitatibus sint porro non in tenetur iure suscipit.
        Optio omnis quas nobis porro deserunt consequatur sapiente nostrum,
        dicta repellendus? Vel pariatur nulla natus ipsa quisquam ab voluptatum!
        Nesciunt totam nemo iure modi, autem ad repellat ut provident unde,
        culpa, corporis quisquam maxime. Odio alias molestias asperiores
        doloremque, odit sunt nihil magnam explicabo. Reiciendis ipsam pariatur
        nemo obcaecati alias dolore labore odit ratione enim perferendis
        voluptatem beatae debitis quod amet vel ad, ut tempora at corporis. Est
        iure odio ipsam expedita nihil! Voluptate ut architecto pariatur non
        explicabo labore quaerat, quia eius ducimus culpa placeat libero
        voluptatum esse. Nobis explicabo reprehenderit eum, corrupti optio est
        facere tempore accusantium enim debitis sequi minima exercitationem sunt
        nostrum nam aperiam aut voluptatem, eveniet veritatis labore illum alias
        facilis! Debitis, reiciendis ipsa fugiat ipsam dolor ad officiis labore
        et illum necessitatibus aliquam molestias odit inventore aut explicabo
        rem dolores officia pariatur neque animi doloribus nobis exercitationem.
        Veritatis perspiciatis nisi eos porro corrupti illo. Ipsam voluptatibus
        explicabo hic quisquam suscipit? Culpa cum omnis quasi sunt? Delectus,
        iure laudantium, rerum molestiae quia possimus culpa mollitia odit
        dolorem pariatur corporis eum illo cupiditate, animi quam modi aliquid
        deleniti velit qui. Eveniet eum voluptatum eligendi cupiditate placeat
        inventore in quo nemo facilis impedit provident odit qui, voluptates
        dolorem nam quae modi. Laudantium consectetur possimus, doloremque autem
        ducimus dolorem architecto inventore aspernatur eligendi doloribus
        aliquam cupiditate, fugit accusantium repellendus consequatur, in
        voluptates quibusdam dolor eveniet nisi non commodi ratione nostrum.
        Modi consequuntur deserunt explicabo quis, odit quibusdam inventore.
        Facere at laudantium sequi nostrum eius nihil possimus veniam? Corporis
        corrupti odit, dignissimos esse officiis nostrum. Deleniti excepturi
        earum esse doloremque reiciendis recusandae sit aperiam eos nisi rem
        dolorum corporis inventore aspernatur, veritatis totam necessitatibus
        beatae nobis. Corrupti, fugiat tempora! Illo vel illum fugiat, vitae
        porro et, dicta, minima consequuntur quaerat corporis laborum rerum.
        Enim illo nostrum laudantium cum natus soluta architecto unde nobis
        autem, ex velit omnis accusamus perspiciatis aliquid impedit porro quasi
        consequatur explicabo nisi blanditiis nemo quod iusto aperiam deserunt.
        Error consectetur sequi provident. Corporis quibusdam veritatis harum
        repudiandae deleniti laboriosam molestiae ipsa totam eveniet at quis
        iste dignissimos eaque debitis voluptatem, asperiores eligendi
        obcaecati, quod, atque ad rerum! Et ut maiores quos nam soluta
        laudantium! Delectus perferendis beatae aliquam saepe quos nostrum aut
        recusandae voluptatum pariatur. Blanditiis fugit natus ratione
        repudiandae minus adipisci dicta ab rerum consequuntur accusantium
        aliquid error cupiditate facilis delectus assumenda nam, exercitationem
        voluptatibus magnam quidem cumque officiis! Provident unde dolor
        deleniti consectetur repellat reprehenderit labore voluptatibus
        consequatur, nulla ab? Culpa amet tenetur consequatur sapiente maxime
        cumque reprehenderit, necessitatibus nemo sed tempore ullam impedit
        consectetur, soluta tempora qui, dignissimos similique dolore ratione
        alias eos sunt? Iusto quisquam deleniti iste at excepturi neque nulla ad
        perferendis vel, minus, praesentium ducimus! Aliquid corporis tempora
        consectetur! Voluptatibus consequuntur vero hic inventore possimus eaque
        quisquam, corporis ipsum. Vel aperiam, aliquam ratione nesciunt nobis
        eos. Aliquam, magni eligendi ipsa, omnis eum sapiente maiores molestias
        architecto, dicta asperiores qui! Culpa fugiat reprehenderit quaerat
        molestiae, tempore eligendi, cum ab tempora dolor fugit omnis debitis
        accusamus sed temporibus a? Temporibus adipisci maiores repellat labore
        vel corporis quos totam facere eos veniam obcaecati dolore, voluptates
        expedita fuga aliquid et at deleniti accusamus dolorem blanditiis
        doloribus voluptate! Quibusdam hic deserunt magnam laboriosam quas
        similique ullam suscipit sint, id ipsa animi, voluptates officiis ad eum
        fuga? Quasi voluptatum explicabo delectus magnam dicta minima? At alias
        qui porro corporis adipisci fuga blanditiis eligendi assumenda eius,
        dolorem nemo quae harum quas quam a nisi nulla? Aliquam ducimus
        voluptates, accusamus rem, expedita culpa cumque nemo, harum unde amet
        voluptatibus? Saepe sed dolor fugiat nesciunt numquam tempora aliquam
        blanditiis, odit non totam labore repudiandae laudantium, tenetur optio
        voluptas perferendis? Eum dolores consequuntur hic minima numquam nobis
        soluta, saepe similique sequi! Libero, corporis. Commodi incidunt
        expedita libero officiis numquam! Facere ab tenetur necessitatibus
        dolorum culpa, voluptatibus minima praesentium atque nemo, ducimus
        aliquid! Delectus a placeat sequi adipisci, illo molestias mollitia
        necessitatibus blanditiis recusandae? Natus atque cupiditate neque
        inventore modi quasi excepturi blanditiis repellendus perferendis
        nostrum in odio sequi ullam officia, maiores facere enim nulla fugit
        veniam nobis placeat. Sint non, minima, voluptatem neque magni
        distinctio temporibus quos, corporis qui repudiandae reiciendis!
        Deserunt, error id voluptatum consequatur ullam enim tenetur voluptas a
        qui est. Iure nulla vitae pariatur inventore id fugit temporibus neque
        sapiente nam, dolore eligendi dolores quam nobis tenetur ratione hic!
        Temporibus doloremque velit harum veniam perferendis corporis, saepe
        iure sequi illo sint magnam veritatis odit quasi eligendi aperiam unde
        repellendus quod vel nobis praesentium quis minus sapiente? Aliquam
        soluta libero, possimus sequi aspernatur quae nisi. Tenetur expedita
        alias nobis consectetur natus odio, consequatur ut labore vel et laborum
        sunt illum repellat aliquid hic, illo modi distinctio enim consequuntur
        nesciunt! Eaque, numquam voluptatibus hic quisquam iusto voluptate.
        Nobis incidunt aperiam suscipit fugiat maxime, dolore necessitatibus
        magnam fuga esse dolorem voluptate praesentium consectetur officia
        inventore in id, perferendis fugit. Odit tempora est dolorum dolorem
        perferendis illum corrupti delectus aut sequi exercitationem nisi autem
        laborum, eveniet deserunt quo iusto recusandae, fugiat molestias dicta
        velit, repudiandae adipisci. Quod facilis cumque ratione natus error
        voluptatibus! Sapiente distinctio maxime omnis nisi iusto neque
        obcaecati minus tempora ducimus voluptates quod perferendis accusamus,
        ab atque reiciendis dolore sint enim sunt dolores velit recusandae,
        quia, quaerat necessitatibus iste. Excepturi minus itaque architecto
        quae quaerat vel eaque quisquam minima id ducimus ea illo dolore ex,
        laborum cum! Recusandae fuga minima dolor voluptatem! Nemo aperiam
        perspiciatis eius voluptatibus est autem suscipit. Minima magnam
        deserunt aperiam eligendi. Voluptate molestiae quisquam minus iusto
        dignissimos adipisci nesciunt, delectus nam fugiat sed odio itaque
        cupiditate enim expedita quo nobis corrupti. Molestias, aut magnam.
        Rerum nesciunt officiis repellendus dignissimos distinctio blanditiis,
        ratione excepturi, aut commodi illo voluptatem, unde vel magnam animi
        libero ut provident eius? Delectus labore veniam voluptatibus enim nobis
        dolor perspiciatis! Soluta repellat facere molestias, itaque magnam
        repudiandae dolores, quae laborum officia inventore nemo! Iusto, ab
        dolorem. Explicabo harum repellat, vero unde neque ad voluptatum
        perferendis quibusdam blanditiis laboriosam illo delectus veritatis
        voluptatem nulla beatae magni cupiditate praesentium ab ipsum, dolorem
        rem minima fugiat obcaecati sequi. Velit tenetur non placeat, distinctio
        sed recusandae libero ratione vel doloribus temporibus perferendis
        impedit cumque, quibusdam quod architecto! Fugit, quam excepturi tempore
        aliquam culpa quis numquam quos consequuntur unde velit dicta laudantium
        tenetur accusantium perferendis cupiditate. Quia iste, tempora doloribus
        sequi ipsa, facilis aliquam maiores sapiente, placeat doloremque nam
        labore! Minus, iure quas repellat nisi ducimus modi iste! Sapiente atque
        vero, delectus aut nemo impedit? Soluta dolorum fuga porro iure non
        repudiandae sed illo quaerat veniam atque laborum, esse est quibusdam
        voluptates. Quaerat possimus ex recusandae, illum laborum voluptatum
        voluptate ipsa praesentium, facere porro velit magnam numquam adipisci
        qui ut illo hic quis. Dolore beatae cumque eveniet officia, repellat
        architecto consectetur distinctio laudantium, est molestias, temporibus
        minima! Velit, eius corrupti hic natus, et consectetur id officia
        facilis temporibus delectus, expedita ea rem error provident explicabo
        tenetur eos at fugiat ad perferendis labore saepe reiciendis. Impedit
        mollitia, dignissimos aperiam nulla exercitationem tenetur neque placeat
        eos perferendis qui suscipit corporis? Soluta ex quisquam facilis eaque
        odit suscipit consequatur non ab aperiam deleniti! In, quos quaerat ad
        iste sint qui illo nostrum totam, blanditiis quidem aliquid eveniet.
        Error, amet. Tempora, non nemo odio, possimus nostrum laborum omnis
        iusto excepturi inventore similique laudantium ratione debitis iure
        eligendi pariatur nam modi placeat aut culpa reiciendis magni optio
        harum cum! Nemo consequuntur asperiores aliquam, itaque cumque eos,
        ullam porro molestias dolore tempora omnis officia quae corrupti
        delectus, placeat fuga vel unde repudiandae est eius consectetur
        necessitatibus veniam? Officiis eos, adipisci sunt libero consequuntur
        nemo assumenda fuga, dolores earum, veniam quisquam quod? Iusto officia
        amet ipsa, id saepe ipsam. Ipsum ratione nam eaque tempore veniam
        excepturi odit error! Ipsa doloremque inventore distinctio eaque ex,
        assumenda architecto doloribus saepe provident? Voluptates quas delectus
        officia nulla similique quibusdam possimus nam ex non quasi eveniet,
        fugit ducimus voluptas vitae doloribus, error asperiores hic? Illum
        quaerat sunt laborum? Illum in natus impedit voluptate deleniti sapiente
        architecto cum rerum, debitis neque recusandae totam ut exercitationem
        enim rem. Ab enim error eos perferendis nihil, eum neque nulla
        voluptates consequuntur. Voluptates, doloremque obcaecati neque, eos
        vitae debitis deleniti adipisci animi ratione dignissimos recusandae
        aliquam! Itaque ipsam illum consectetur, cumque quos labore fuga velit
        veritatis veniam voluptas voluptatibus libero iure, incidunt explicabo
        consequatur delectus consequuntur, distinctio vero voluptatum nobis quas
        molestiae accusantium. Nemo, doloribus quia. Quae excepturi doloremque
        fugiat hic, fugit porro laborum aliquid debitis minima maxime,
        consectetur rem quaerat ea atque veniam, distinctio dolorem commodi
        alias molestias quasi quod repellendus quia. Molestiae facilis quam
        incidunt, est dolorem quasi ipsum esse expedita nulla quis voluptatem
        provident facere autem recusandae fugiat illum ratione quidem assumenda
        culpa dolor minus adipisci temporibus! Laboriosam facere ea eveniet
        impedit ullam est totam inventore omnis nam ipsa soluta voluptatibus
        dignissimos dicta accusantium corporis ipsum at sequi ex, sit maxime.
        Praesentium delectus libero ab, provident iure, quia similique illo aut
        dignissimos nihil inventore fuga neque rem rerum accusantium. Quaerat
        sequi quibusdam quam dolorem, eveniet magni accusamus ratione
        consequatur exercitationem quas officia quis illo voluptas inventore,
        laudantium libero ea, placeat nulla assumenda non quasi amet. Asperiores
        doloremque architecto accusantium sint mollitia! Repudiandae voluptas
        pariatur nesciunt, soluta ipsam quas! Obcaecati molestias aspernatur
        corporis voluptates. Quam libero enim velit nesciunt. Distinctio
        provident aut pariatur veritatis vitae magni consequatur et veniam
        cupiditate error aliquam rem accusantium nostrum dolorum mollitia
        deleniti adipisci temporibus sequi quidem omnis, quasi itaque! Magnam
        iusto, repellendus non incidunt laudantium dolorum voluptates
        perspiciatis mollitia. Est, blanditiis. Assumenda dolorem, sequi vel aut
        quod consectetur adipisci nobis non cupiditate quo corrupti iure,
        expedita, facilis sunt omnis alias architecto blanditiis laborum
        molestiae harum illo quibusdam delectus dolore. Sapiente sed dolorem
        beatae sequi illo, exercitationem fuga qui magnam quam ut repudiandae ad
        quod non, quo provident? Omnis, voluptas! Numquam iure ullam beatae,
        architecto iste quod? Voluptatum praesentium repellendus molestias
        distinctio ipsa eius animi veniam, ea temporibus autem sequi cupiditate,
        nulla nam fuga ratione a. Perferendis quos libero vitae dolor quam.
        Deleniti illo similique, voluptates soluta, ipsam quo ipsum omnis
        impedit mollitia esse nulla at laudantium dignissimos eos laborum
        deserunt neque quaerat et. Tempora, quidem natus iusto quaerat unde iure
        doloremque eum dicta asperiores eius cupiditate harum, a in, voluptates
        ab quas nulla omnis perferendis corrupti dignissimos veniam repellendus?
        Quos eum unde excepturi nobis iusto officia alias! Earum nulla
        consectetur rem mollitia voluptate necessitatibus minus. Natus sit sunt,
        dignissimos a facilis illum dolor ratione quas quaerat, cum consequuntur
        libero, in neque. Saepe, delectus laborum enim porro itaque ut, odio
        voluptas dolore aut consectetur natus, minima ipsam consequuntur ullam
        cum? Corporis odio, labore laborum dicta non ad aliquam, dolorem nostrum
        fugiat vitae eveniet perspiciatis doloribus ipsum ea placeat! Inventore
        ex eum totam, voluptatem quod aspernatur nobis, ullam rem consectetur
        sint natus impedit cumque, quas eligendi fugiat numquam aliquam animi
        sunt sapiente nihil in? Dolores veritatis ea exercitationem tempore
        mollitia sit aspernatur porro repudiandae totam? Excepturi illo beatae
        error obcaecati, molestias maiores dignissimos minus ullam esse harum
        sapiente, fugiat modi vero, fugit doloremque officiis animi tempora quia
        omnis dolorum? Optio quos commodi eum doloribus rem a cum earum
        nesciunt, quasi deserunt id praesentium delectus? Eum id non quis
        tenetur voluptatibus doloribus?
      </p>
    </div>
  );
};

export default Main;
