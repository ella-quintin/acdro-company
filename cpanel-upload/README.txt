ACDRO — SECURITY HEADERS / cPanel UPLOAD INSTRUCTIONS
=====================================================

WHAT WAS WRONG
--------------
A scan of http://acdro.org/ returned grade F: zero security headers and no
HTTP -> HTTPS redirect. Live responses contained only "Server: nginx" and
"X-Proxy-Cache: HIT". The .htaccess in the repo was therefore not active on
the live site (it was never uploaded, or the host serves Nginx directly and
ignores .htaccess).

WHAT IS IN THIS FOLDER
----------------------
1. .htaccess            - main file for Apache / cPanel (upload this one)
2. _headers             - optional; only used if you deploy to Netlify
3. nginx-headers.conf   - fallback to give to your host if .htaccess is ignored

HOW TO UPLOAD FROM CPANEL (Apache)
----------------------------------
1. cPanel -> File Manager -> public_html (the folder holding index.html).
2. Enable "Show hidden files" in File Manager settings, otherwise you will
   not see .htaccess.
3. Upload/overwrite .htaccess here:  public_html/.htaccess
   (keep the leading dot; permissions 644).
4. If the site is cached, purge the cache in cPanel (or ask the host) —
   the live site showed X-Proxy-Cache: HIT, so old responses can persist.
5. Verify with:
     curl -I https://acdro.org/
   You should see Content-Security-Policy, X-Frame-Options,
   X-Content-Type-Options, Referrer-Policy, Permissions-Policy,
   Strict-Transport-Security, Cross-Origin-Opener-Policy and
   Cross-Origin-Resource-Policy.
6. Re-run the scan on https://acdro.org/ (not http://). http:// should now
   return 301 to https.

IF NOTHING CHANGES AFTER UPLOAD
-------------------------------
Nginx does not read .htaccess. If curl -I still shows "Server: nginx" with
no headers, send cpanel-upload/nginx-headers.conf to your hosting support
and ask them to apply it in the acdro.org vhost. There is no cPanel-only
setting that can add arbitrary HTTP headers on an Nginx-only server.

CSP NOTE (important)
--------------------
The policy includes https://22hj55di.apicdn.sanity.io in connect-src.
src/lib/sanity.js uses useCdn: true, so queries go to apicdn.sanity.io.
The previous policy only allowed api.sanity.io and would have broken the
blog and gallery once the CSP was enforced. Do not remove that origin.

BUILD / REPLACING THE SITE
--------------------------
"npm run build" copies public/.htaccess and public/_headers into dist/.
Upload the contents of dist/ to public_html when you deploy a new build.
