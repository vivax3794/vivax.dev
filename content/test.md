+++
title = "Testing"
template = "page.html"
+++

> [!NOTE]
> It seems you have found a *secret*, this is mostly just a test page for all the features of the blog so I can see styling changes etc in one place.

# Header 1

text

## Header 1

text

### Header 2

text

#### Header 3

text

##### Header 4

text

###### Header 5

text

# Text

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

# Stylings

*italic*, **bold**, `code`, *`italic_code`*, **`bold_code`**, 
~strike~, ~*strike_italic*~, ~**strike_bold**~, ~`strike_code`~, ~*`strike_italic_code`*~, ~**`strike_bold_code`**~,

> Quote: *italic*, **bold**, `code`, *`italic_code`*, **`bold_code`**, 
~strike~, ~*strike_italic*~, ~**strike_bold**~, ~`strike_code`~, ~*`strike_italic_code`*~, ~**`strike_bold_code`**~,

# Code blocks

```rust
use std::cow::Cow;

/// Cool thing
#[derive(Clone)]
struct Foo {
    bar: Cow<'stratic, str>
}
```

# Tabels 

| Normal | Left aligned | Right Aligned | Centered |
| --- | :--- | ---: | :---: |
| LOOOOOOOOOOOOOONG | LOOOOOOOOOOOOOONG | LOOOOOOOOOOOOOONG | LOOOOOOOOOOOOOONG |
| lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum  |
| lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum  |
| lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum  |
| lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum  |
| lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum  |
| lorem ipsum | lorem ipsum | lorem ipsum | lorem ipsum  |

# Callouts

> [!NOTE]
> Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

> [!TIP]
> Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

> [!WARNING]
> Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

> [!IMPORTANT]
> Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

> [!CAUTION]
> Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

# Images
![Placeholder](https://placehold.co/600x400)
![Placeholder](https://placehold.co/200)

# Mermaid
{% mermaid() %}
classDiagram
    class Foo {
        String hello
        +String world
        +greet(int) int
    }
    class Bar {
        <<Enum>>
        A
        B
        C
    }

    Bar *-- Foo

{% end %}
