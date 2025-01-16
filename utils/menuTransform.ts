import type { MenuItem } from "types/menu";

export function transformMenuItems(items: MenuItem[]): MenuItem[] {
    const itemMap = new Map<string, MenuItem>();
    const rootItems: MenuItem[] = [];

    // First pass: create a map of all items
    items.forEach((item) => {
        itemMap.set(item.id, { ...item, items: [] });
    });

    // Second pass: build the tree structure
    items.forEach((item) => {
        const menuItem = itemMap.get(item.id)!;
        if (item.parent && itemMap.has(item.parent)) {
            const parentItem = itemMap.get(item.parent)!;
            parentItem.items!.push(menuItem);
        } else {
            rootItems.push(menuItem);
        }
    });

    return rootItems;
}
