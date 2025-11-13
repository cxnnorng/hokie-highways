import React, { useMemo, useState } from "react";

const toLocalDateTimeValue = (d = new Date()) =>
  new Date(d.getTime() - d.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 16);

const TripPage = () => {
  const [originText, setOriginText] = useState("");
  const [destText, setDestText] = useState("");

  const initialDateTime = useMemo(() => toLocalDateTimeValue(new Date()), []);
  const [arriveBy, setArriveBy] = useState(false);
  const [prefs, setPrefs] = useState({
    maxWalkMeters: 500,
    maxTransfers: 2,
  });

  const swap = () => {
    const temp = originText;
    setOriginText(destText);
    setDestText(temp);
  };

  const onNumberChange = (key) => (e) => {
    const value = e.target.value === "" ? "" : Number(e.target.value);
    setPrefs((p) => ({ ...p, [key]: value }));
  };

  return (
    <div className="trip-wrap">
      <style>{`
        .trip-actions { display: flex; justify-content: flex-end; padding-top: 8px; }
        .trip-chip { padding: 8px 14px; border: 1px solid #d1d5db; border-radius: 100px; cursor: pointer; user-select: none; }
        .trip-chip--active { background: #111827; color: #fff; }
        .trip-controls { display: flex; flex-wrap: wrap; align-items: center; gap: 18px; }
        .trip-datetime { width: 260px; background: #f3f4f6; pointer-events: none; color: #111827; }
        .trip-field { display: flex; flex-direction: column; gap: 8px; }
        .trip-grid2 { display: grid; grid-template-columns: 1fr; gap: 24px; align-items: start; }
        .trip-gridInner { display: flex; gap: 36px; align-items: baseline; }
        .trip-headerTitle { font-size: 32px; line-height: 1.2; margin: 0 0 12px; }
        .trip-input, .trip-number, .trip-datetime { width: 100%; border: 1px solid #d1d5db; border-radius: 12px; padding: 12px 14px; font-size: 16px; outline: none; background: #fff; }
        .trip-input:focus, .trip-number:focus, .trip-datetime:focus { border-color: #111827; }
        .trip-label { font-size: 14px; font-weight: 600; color: #374151; }
        .trip-muted { color: #666; font-size: 14px; margin-bottom: 24px; }
        .trip-number--transfers { width: 90px; }
        .trip-number--walk { width: 120px; }
        .trip-primaryBtn { background: #111827; color: #fff; border: 0; border-radius: 12px; padding: 12px 18px; font-size: 16px; font-weight: 600; cursor: pointer; }
        .trip-row { display: grid; grid-template-columns: 1fr 56px 1fr; gap: 24px; align-items: end; }
        .trip-section {
          background: rgba(255,255,255,0.92);
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.06);
          padding: 28px 55px 28px 28px; 
        }
        .trip-stack { display: flex; flex-direction: column; gap: 24px; }
        .trip-swapBtn { height: 44px; width: 56px; border-radius: 999px; border: 1px solid #d1d5db; background: #f9fafb; cursor: pointer; margin-left: 16px; }
        .trip-wrap { max-width: 920px; margin: 0 auto; padding: 28px 28px 48px; font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
      `}</style>

      <header>
        <h1 className="trip-headerTitle">Plan a Trip</h1>
        <div className="trip-muted">Enter your trip details below.</div>
      </header>

      <section className="trip-section">
        <form className="trip-stack">
          <div className="trip-row">
            <label className="trip-field">
              <span className="trip-label">Origin</span>
              <input
                className="trip-input"
                placeholder="Search places or addresses"
                value={originText}
                onChange={(e) => setOriginText(e.target.value)}
              />
            </label>

            <button
              type="button"
              onClick={swap}
              className="trip-swapBtn"
              title="Swap origin & destination"
            >
              ⇄
            </button>

            <label className="trip-field">
              <span className="trip-label">Destination</span>
              <input
                className="trip-input"
                placeholder="Search places or addresses"
                value={destText}
                onChange={(e) => setDestText(e.target.value)}
              />
            </label>
          </div>

          <div className="trip-controls">
            <div
              className="trip-controls"
              role="radiogroup"
              aria-label="Time mode"
            >
              <label
                className={`trip-chip ${!arriveBy ? "trip-chip--active" : ""}`}
              >
                <input
                  type="radio"
                  name="timemode"
                  style={{ display: "none" }}
                  checked={!arriveBy}
                  onChange={() => setArriveBy(false)}
                />
                Leave at
              </label>
              <label
                className={`trip-chip ${arriveBy ? "trip-chip--active" : ""}`}
              >
                <input
                  type="radio"
                  name="timemode"
                  style={{ display: "none" }}
                  checked={arriveBy}
                  onChange={() => setArriveBy(true)}
                />
                Arrive by
              </label>
            </div>

            <input
              type="datetime-local"
              value={initialDateTime}
              readOnly
              className="trip-datetime"
              aria-readonly="true"
            />
          </div>

          <div className="trip-grid2">
            <div className="trip-gridInner">
              <label className="trip-field" style={{ width: "120px" }}>
                <span className="trip-label">Max walk (ft)</span>
                <input
                  type="number"
                  className="trip-number trip-number--walk"
                  value={prefs.maxWalkMeters}
                  min={0}
                  step={1}
                  onChange={onNumberChange("maxWalkMeters")}
                />
              </label>
              <label className="trip-field" style={{ width: "90px" }}>
                <span className="trip-label">Max transfers</span>
                <input
                  type="number"
                  className="trip-number trip-number--transfers"
                  value={prefs.maxTransfers}
                  min={0}
                  step={1}
                  onChange={onNumberChange("maxTransfers")}
                />
              </label>
            </div>
          </div>

          <div className="trip-actions">
            <button type="submit" className="trip-primaryBtn">
              Plan trip
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default TripPage;
