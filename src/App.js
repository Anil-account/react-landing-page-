import { init } from "./utils/layer";
import React, { useEffect, useRef } from "react";

function App() {
  const log = useRef(true);
  useEffect(() => {
    if (log.current) {
      log.current = false;
    }
    return () => {
      init();
    };
  }, []);

  return (
    <div className="App">
      <div className="head">
        <h1 className="title">Humam Skull</h1>
        <p className="text">
          The skeleton of the head and neck includes the skull, middle ear
          ossicles, hyoid bone, and cervical vertebrae. The skull is composed of
          several separate bones united at immobile joints called sutures. The
          mandible is an exception to this rule, as it is united to the skull by
          the mobile, synovial TemproMandibular Joints (TMJ). The bones of the
          skull are 22 bones, organized into a cranial skeleton (8 bones) that
          surrounds the brain and a facial skeleton (14 bones). The cranial
          cavity is the space containing the brain. The skull vault (calvarium)
          is the upper part of the cranium and forms the roof and side walls of
          the cranial cavity. The base of the skull is the lowest part of the
          cranium and forms the floor of the cranial cavity. The relatively
          flat bones of the vault (frontal, parietals, and part of the
          occipital) are composed of external and internal tables of compact
          bone separated by a layer of spongy bone called the diploë.
        </p>
        <p>
          <button className="btn">English</button>
          <button className="btn">English</button>
        </p>
      </div>
      <div className="price">
        <h1  className="head-title">Part of Skull</h1>
        <div className="price-table">
          <div className="price-card">
            <p className="title">Anterior cranial fossa</p>
            <p className="info">
              The anterior cranial fossa comprises a holey plate at the center,
              the so called cribriform plate (lamina cribrosa). The
              approximately 20 cribriform foramina serve as a passageway for the
              olfactory nerves to the olfactory mucosa in the nasal cavity. Both
              the optic nerve and the ophthalmic artery pass through the optic
              canal which is centrally located on the sphenoid bone. The lesser
              wing of the sphenoid bone (ala minor) forms the dorsal boundary of
              the anterior cranial fossa.
            </p>
            <button className="btn">Read more</button>
          </div>
          <div className="price-card">
            <p className="title">Middle cranial fossa</p>
            <p className="info">
              The middle cranial fossa lies slightly deeper than the anterior
              cranial fossa. The superior orbital fissure which is bounded by
              the greater and lesser wings of the sphenoid bone contains the
              trochlear nerve, abducens nerve, oculomotor nerve and ophthalmic
              nerve. The sella turcica is a depression in the sphenoid bone. In
              the center of the middle cranial fossa it forms the pituitary
              fossa in which the pituitary gland sits.
            </p>
            <button className="btn">Read more</button>
          </div>
          <div className="price-card">
            <p className="title">Posterior cranial fossa</p>
            <p className="info" >
              The largest opening in the skull is the foramen magnum. Here the
              brainstem leaves the skull and becomes the spinal cord. The
              foramen magnum is situated in the center of the posterior cranial
              fossa. It is separated from the middle cranial fossa by the dorsum
              sellae and the upper edge of the petrous bone.
            </p>
            <button className="btn">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
