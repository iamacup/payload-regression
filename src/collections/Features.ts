import { Block, CollectionConfig } from "payload/types";

const BasicSelectorBlock: Block = {
    slug: "BasicSelector",
    interfaceName: "BasicSelectorBlock",
    fields: [
      {
        name: "query",
        type: "text",
        required: true,
      },
      {
        name: "matchNumber",
        type: "number",
        required: true,
      },
    ],
  };

  const AllSelectorBlocks: Block = {
    slug: "SelectorSizeBlock",
    interfaceName: "SelectorSizeBlock",
    fields: [
      {
        type: "blocks",
        minRows: 1,
        maxRows: 1,
        name: "default",
        blocks: [BasicSelectorBlock],
      },
    ],
  };

  const Features: CollectionConfig = {
    slug: "features",
    access: {
      read: () => true,
    },
    fields: [
      {
        name: "selector",
        type: "blocks",
        blocks: [AllSelectorBlocks],
        minRows: 1,
        maxRows: 1,
      },
    ],
  };
  
  export default Features;