import { React } from "react";
import { MenuItemRow } from "./menuItemRow";
import { ReelRow } from "./reelRow";
import { SpinnerBtn } from "./spinnerBtn";
import { SymbolsRow } from "./symbolsRow";

export function SlotMachine() {
  return (
    <div>
      <SpinnerBtn />
      <ReelRow>
        <MenuItemRow></MenuItemRow>
      </ReelRow>
      <ReelRow>
        <SymbolsRow></SymbolsRow>
      </ReelRow>
      <ReelRow>
        <SymbolsRow></SymbolsRow>
      </ReelRow>
      <ReelRow>
        <SymbolsRow></SymbolsRow>
      </ReelRow>
      <ReelRow>
        <SymbolsRow></SymbolsRow>
      </ReelRow>
      <ReelRow>
        <SymbolsRow></SymbolsRow>
      </ReelRow>
      <ReelRow>
        <SymbolsRow></SymbolsRow>
      </ReelRow>
    </div>
  );
}
