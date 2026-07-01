import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(page_title="Chandra Associates", layout="wide")

st.title("Chandra Associates")
st.markdown(
    "This Streamlit wrapper can display your website once it is deployed to a public URL. "
    "Enter the public address of your hosted site below."
)

site_url = st.text_input(
    "Public website URL",
    "https://your-site-url.com",
    help="Use the URL where your built React site is deployed.",
)

if site_url:
    st.info("If your site is hosted publicly, it will appear below.")
    components.iframe(site_url, height=900, scrolling=True)
else:
    st.warning("Enter the public URL for your site to preview it here.")
