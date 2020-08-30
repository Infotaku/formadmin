module ActiveAdmin
  module Views
    class TableFor < Arbre::HTML::Table
      def build_table_cell(col, resource)
        td class: col.html_class do
          html = helpers.format_attribute(resource, col.data)
          # Don't add the same Arbre twice, while still allowing format_attribute to call status_tag

          if current_arbre_element.children.include? html
            current_arbre_element.children.delete html
          end

          current_arbre_element << content_tag(:span, col.pretty_title, class: 'column_header')
          current_arbre_element << content_tag(:span, html, class: 'column_value')
        end
      end

      protected

      # Set some good defaults for tables
      def set_table_tag_defaults
        super

        add_class('table_for')
      end
    end
  end
end
