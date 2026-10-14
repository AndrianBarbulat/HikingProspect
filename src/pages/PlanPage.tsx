import { SafetyNotice } from '../components/SafetyNotice'

const checklist = ['Tell someone your intended route and return time', 'Check an authoritative local forecast and notices', 'Carry suitable navigation tools and know how to use them', 'Pack water, food, spare warmth and a waterproof layer', 'Turn back if conditions or your energy change']

export function PlanPage() {
  return (
    <div className="page-shell editorial-page">
      <header className="page-intro"><p className="eyebrow">A thoughtful start</p><h1>Plan your hike</h1><p className="lede">A concise preparation guide to use alongside official maps, forecasts and local advice.</p></header>
      <SafetyNotice />
      <section className="editorial-grid"><div><h2>Before you set out</h2><ul className="checklist">{checklist.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h2>Read the grade</h2><dl className="grade-list"><div><dt>● Easy</dt><dd>Shorter outings on gentler, more consistent ground.</dd></div><div><dt>◆ Moderate</dt><dd>Longer or rougher walks with sustained ascent.</dd></div><div><dt>▲ Hard</dt><dd>Strenuous mountain days with exposure or complex terrain.</dd></div></dl></div></section>
      <section className="rule-section"><h2>Clothing and equipment</h2><p>Build around layers: comfortable base clothing, warmth, and windproof or waterproof protection. Add sturdy footwear, food, water, a small first-aid kit, a light, and independent navigation appropriate to the real outing.</p></section>
      <section className="editorial-grid editorial-grid--three"><div><h2>Weather</h2><p>Conditions can change quickly with elevation. Check a trusted regional forecast and observe what is happening around you.</p></div><div><h2>Leave no trace</h2><p>Plan ahead, use durable surfaces, take waste home, leave what you find, and respect wildlife and other visitors.</p></div><div><h2>Navigation & emergencies</h2><p>Carry an independent map and know local emergency procedures. Trailmark is not a navigation or safety service.</p></div></section>
    </div>
  )
}
