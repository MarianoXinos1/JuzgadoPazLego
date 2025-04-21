import Accordion from "../components/Accordion";
import Header from "../components/Header";
import {MarqueeFrases} from '../components/Clinicas'
import ShiftControl from "@/components/welcome/ShiftControl";
import {Services} from "../components/Services";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Header />
      <MarqueeFrases />
      <Services/>
      <ShiftControl/>
      <Accordion />
    </div>
  );
}
