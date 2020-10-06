import React from "react";
import { connect } from "react-redux";
import { SECTIONS, SORT_TYPES, WINDOWS } from "../constants";
import {
  setSection,
  setSort,
  setWindow,
  setPage,
  setShowViral,
} from "../redux/actions";

function GalleryPrefs({
  section,
  sort,
  showViral,
  setSection,
  setSort,
  setWindow,
  setPage,
  setShowViral,
}) {
  function setSectionAdjustingSort(section, sort) {
    // only user section is allowed for "rising" sort. default is "viral".
    if (section !== SECTIONS.user && sort === SORT_TYPES.rising) {
      setSort(SORT_TYPES.viral);
    }

    // only "top" section is allowed for "window" param.
    if (section !== SECTIONS.top) {
      setWindow(null);
    }

    // restart page number on each page change
    setPage(0);

    setSection(section);
  }

  return (
    <section className="gallery-prefs">
      {Object.values(SECTIONS).map((section, i) => (
        <button key={i} onClick={() => setSectionAdjustingSort(section, sort)}>
          {section}
        </button>
      ))}

      <input
        id="viral-switch"
        type="checkbox"
        checked={showViral}
        onChange={() => setShowViral(!showViral)}
      />
      <label htmlFor="viral-switch">viral</label>

      <label htmlFor="sort">sort</label>
      <select
        name="sort"
        id="sort-types"
        onChange={(e) => setSort(e.target.value)}
      >
        {Object.values(SORT_TYPES).map((sortType, i) => {
          if (sortType === SORT_TYPES.rising && section !== SECTIONS.user) {
            return null;
          }

          return (
            <option key={i} value={sortType}>
              {sortType}
            </option>
          );
        })}
      </select>

      {section === SECTIONS.top && (
        <>
          <label htmlFor="window">window:</label>
          <select
            name="window"
            id="windows"
            onChange={(e) => setWindow(e.target.value)}
          >
            {Object.values(WINDOWS).map((window, i) => (
              <option key={i} value={window}>
                {window}
              </option>
            ))}
          </select>
        </>
      )}
    </section>
  );
}

const mapStateToProps = (state) => ({
  sort: state.galleryPrefs.sort,
  section: state.galleryPrefs.section,
  showViral: state.galleryPrefs.showViral,
});

const mapDispatchToProps = {
  setSection,
  setSort,
  setWindow,
  setPage,
  setShowViral,
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPrefs);
