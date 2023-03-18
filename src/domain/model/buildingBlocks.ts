import { DataType } from "./data"

class BaseBlock<T extends Node> {
    constructor(readonly type: BlockTypes) {
        this.type = type
    }
    abstract compose(): T extends 
}

class ContentBlock extends BaseBlock<HTMLElement> {
    constructor(
        readonly id: string,
        readonly dataInId: c,
        readonly content: HtmlElementBlock
        ) {
            super(BlockTypes.CONTENT_BLOCK)
            this.id = id
            this.dataInId = dataInId
            this.content = content
        }
    compose() {
        throw new Error("Method not implemented.")
    }
}

class HtmlElementBlock extends BaseBlock {
    constructor(
        readonly tag: keyof HTMLElementTagNameMap,
        readonly childs: BlockType[]
    ) {
        super(BlockTypes.HTML_ELEMENT_BLOCK)
        this.tag = tag
    }
    compose(): HTMLElement {
        const element = document.createElement(this.tag)
        this.childs.forEach(childBlock => element.appendChild(childBlock.compose()))

    }


class TextBlock extends BaseBlock {
    constructor(readonly text: string) {
        super(BlockTypes.TEXT_BLOCK)
        this.text = text
    }
    compose(): string {
        return this.text
    }
}

class DataBlock extends BaseBlock {
    constructor(readonly text: string, readonly data: DataType) {
        super(BlockTypes.DATA_BLOCK)
        this.data = data
    }
}

enum BlockTypes {
    CONTENT_BLOCK,
    HTML_ELEMENT_BLOCK,
    TEXT_BLOCK,
    DATA_BLOCK
}

type BlockType = ContentBlock | HtmlBl
