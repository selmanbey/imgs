import React from "react";
import "./GalleryPrefs.css";
import { connect } from "react-redux";
import { SECTIONS, SORT_TYPES, WINDOWS } from "../../constants";
import {
  setSection,
  setSort,
  setWindow,
  setPage,
  setShowViral,
} from "../../redux/actions";

function GalleryPrefs({
  page,
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

    // restart page number on each section change
    setPage(0);

    setSection(section);
  }

  return (
    <section role="region" className="gallery-prefs">
      <div className="gallery-pref-page-display">
        {/* Display the number of pages as dots */}
        <p>{`page ${page + 1}`}</p>
        {Array(page + 1)
          .fill()
          .map((_, i) => (
            <div key={i} className="page-indicator"></div>
          ))}
      </div>

      <div className="gallery-pref-sections">
        {Object.values(SECTIONS).map((s, i) => (
          <button
            key={i}
            onClick={() => setSectionAdjustingSort(s, sort)}
            className={section === s ? "active-section" : null}
            data-testid={section === s ? "active-section" : null}
          >
            {s}
          </button>
        ))}
        <div
          id={"selected-" + section}
          className="active-section-indicator"
        ></div>
      </div>

      <div className="gallery-pref-options">
        <label>
          <span className="select-name">sort:</span>
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
        </label>

        {section === SECTIONS.top && (
          <label>
            <span className="select-name">window:</span>
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
          </label>
        )}

        <label>
          <input
            id="viral-switch"
            name="viral"
            type="checkbox"
            checked={showViral}
            onChange={() => setShowViral(!showViral)}
          />
          <span className="checkbox-slider"></span>
          <span className="checkbox-name">viral</span>
        </label>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  page: state.galleryPrefs.page,
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
