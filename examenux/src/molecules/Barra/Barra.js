import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Barra.css';
import IconBL from '../../atoms/IconsBL/IconBL';

const Barra = () => {
  return (
    /** Tenemos principalmente los contenedores.
     * La línea 14 nos ayuda a ajustar las dimensiones del nav bar
     * Dentro de cada span es donde inlcuimos los iconos
     * Creamos una lista ul, cada elemento dentro de la lista es un il
     */
    <div className="container-fluid ">
      <div className="row flex-nowrap ContainerSecundario ">

        {/**Aqui ajustamos el tamaño de la nav bar */}
        <div className="col-auto col-md-1.5 col-lg-1.5 min-vh-100 d-flex flex-column align-items-start sidebar">

          <div className="bgContainer p-2">


            {/**Cada uno de estos es un elemento de la barra */}

            <ul className="nav nav-pills flex-column mt-4">

              <li className="nav-item">
                <div className="botonSideBar">
                  <button type="button" className="btn btn-link nav-link text-white fs-4 me-1 d-none d-sm-inline button-text">
                    {/**Esta es la clase de los iconos */}


                    <IconBL className="iconoBarra" link="https://icons.veryicon.com/png/o/miscellaneous/big-data-regular-monochrome-icon/sidebar-4.png" titulo=" " />

                  </button>
                  <IconBL link="https://cdn.gtricks.com/2021/04/how-to-enable-youtube-dark-mode-on-pc-and-android-ios-1280x720.jpg" titulo="" />
                </div>
              </li>

              <li className="nav-item">
                <button type="button" className="btn btn-link nav-link text-white fs-4 me-1 d-none d-sm-inline button-text">
                  {/**Esta es la clase de los iconos */}
                  <IconBL link="https://www.unhcr.org/spotlight/wp-content/uploads/sites/55/2021/05/Icon-test-House-white.png" titulo="Principal" />
                </button>
              </li>



              <li className="nav-item">
                <button type="button" className="btn btn-link nav-link text-white fs-4 me-1 d-none d-sm-inline button-text">
                  {/**Esta es la clase de los iconos */}
                  <IconBL link="https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png" titulo="Shorts" />
                </button>
              </li>


              <li className="nav-item">
                <button type="button" className="btn btn-link nav-link text-white fs-4 me-1 d-none d-sm-inline button-text">
                  {/**Esta es la clase de los iconos */}
                  <IconBL link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgoL5gHlcuaNv6Q0x1bAcRk3IpSQcxtKHMgo-92ov1Tg&s" titulo="Suscribciones" />
                </button>
              </li>

              {/**Se crea la linea blanca de separación */}
              <hr className="custom-hr" />
              <p>Tú &gt; </p>

              <li className="nav-item">
                <button type="button" className="btn btn-link nav-link text-white fs-4 me-1 d-none d-sm-inline button-text">
                  {/**Esta es la clase de los iconos */}
                  <IconBL link="https://static.vecteezy.com/system/resources/previews/004/274/186/original/person-icon-user-interface-icon-silhouette-of-man-simple-symbol-a-glyph-symbol-in-your-web-site-design-logo-app-ui-webinar-video-chat-ect-vector.jpg" titulo="Suscribciones" />
                </button>
              </li>


              <li className="nav-item">
                <button type="button" className="btn btn-link nav-link text-white fs-4 me-1 d-none d-sm-inline button-text">
                  {/**Esta es la clase de los iconos */}
                  <IconBL link="https://www.shutterstock.com/image-vector/clock-icon-trendy-flat-style-600nw-674379841.jpg" titulo="Historial" />
                </button>
              </li>


              <li className="nav-item">
                <button type="button" className="btn btn-link nav-link text-white fs-4 me-1 d-none d-sm-inline button-text">
                  {/**Esta es la clase de los iconos */}
                  <IconBL link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLLGgHYdiuTSMsp42bmlDxdeS4TRy17-DmcGrMJ3qgUg&s" titulo="Playlist" />
                </button>
              </li>

              <li className="nav-item">
                <button type="button" className="btn btn-link nav-link text-white fs-4 me-1 d-none d-sm-inline button-text">
                  {/**Esta es la clase de los iconos */}
                  <IconBL link="https://cdn.logojoy.com/wp-content/uploads/20200406092725/youtube-icon.png" titulo="Your Video" />
                </button>
              </li>

              <li className="nav-item">
                <button type="button" className="btn btn-link nav-link text-white fs-4 me-1 d-none d-sm-inline button-text">
                  {/**Esta es la clase de los iconos */}
                  <IconBL link="https://www.shutterstock.com/image-vector/clock-icon-trendy-flat-style-600nw-674379841.jpg" titulo="Ver mas tarde" />
                </button>
              </li>

              <li className="nav-item">
                <button type="button" className="btn btn-link nav-link text-white fs-4 me-1 d-none d-sm-inline button-text">
                  {/**Esta es la clase de los iconos */}
                  <IconBL link="https://www.freeiconspng.com/thumbs/youtube-like-png/youtube-like-png-9.jpg" titulo="Videos que me gustan" />
                </button>
              </li>

              <li className="nav-item">
                <button type="button" className="btn btn-link nav-link text-white fs-4 me-1 d-none d-sm-inline button-text">
                  {/**Esta es la clase de los iconos */}
                  <IconBL link="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-scissor-icon-png-image_959994.jpg" titulo="Mis Clips" />
                </button>
              </li>

              {/**Se crea la linea blanca de separación */}
              <hr className="custom-hr" />

              <p> <strong>Suscribciones</strong> </p>
              <li className="nav-item">
                <button type="button" className="btn btn-link nav-link text-white fs-4 me-1 d-none d-sm-inline button-text">
                  {/**Esta es la clase de los iconos */}
                  <IconBL link="https://yt3.googleusercontent.com/ytc/AIdro_nhjfsQXViLvnCoADKDh3FCEmQgWNxOB19HhOCRjmyCfoI=s900-c-k-c0x00ffffff-no-rj" titulo="8cho" />
                </button>
              </li>

              <li className="nav-item">
                <button type="button" className="btn btn-link nav-link text-white fs-4 me-1 d-none d-sm-inline button-text">
                  {/**Esta es la clase de los iconos */}
                  <IconBL link="https://yt3.googleusercontent.com/itg6InC3mG_vz82zABL--M82TUZWN8tM2Nj5wNnzIxb3nB54PW5yXPCHf5f4aSNT4XZEAtr2=s900-c-k-c0x00ffffff-no-rj" titulo="Adrian Sáenz" />
                </button>
              </li>

              <li className="nav-item">
                <button type="button" className="btn btn-link nav-link text-white fs-4 me-1 d-none d-sm-inline button-text">
                  {/**Esta es la clase de los iconos */}
                  <IconBL link="https://yt3.googleusercontent.com/0s0wKMOurM0CQnE0x0vvKvyKc9Vg6KyekVZn926aQ5tEEg1iTRq0PHzYq1fZ8Z-c4os2rRZlBA=s900-c-k-c0x00ffffff-no-rj" titulo="Alec Hernández" />
                </button>
              </li>

              <li className="nav-item">
                <button type="button" className="btn btn-link nav-link text-white fs-4 me-1 d-none d-sm-inline button-text">
                  {/**Esta es la clase de los iconos */}
                  <IconBL link="https://yt3.googleusercontent.com/ytc/AIdro_mRqEMEC65LgbC9gBrpFu1tw7XTDJlhdc5JFTFTfZPkYlc=s900-c-k-c0x00ffffff-no-rj" titulo="Alex Meyers " />
                </button>
              </li>

              <li className="nav-item">
                <button type="button" className="btn btn-link nav-link text-white fs-4 me-1 d-none d-sm-inline button-text">
                  {/**Esta es la clase de los iconos */}
                  <IconBL link="https://yt3.googleusercontent.com/ytc/AIf8zZQocz98BdobiH6EeSlv0t9EzUf_BtWkKJnpuI1eSw=s900-c-k-c0x00ffffff-no-rj" titulo="Angela Yelin" />
                </button>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </div>

  );
}

export default Barra;