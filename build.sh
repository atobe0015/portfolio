# #!/bin/bash

# SCRIPT_DIR=$(cd $(dirname $0); pwd)
# CORE_DIR=$(cd $(dirname $0); cd ../mcd-cdp-pilot2; pwd)

# SED='sed'
# if gsed python 2>/dev/null; then
#   SED='gsed'
# fi

#
# nuxt build
#

npm run generate

# #
# # make blade file
# #

# tmpfile1=$(mktemp)
# tmpfile2=$(mktemp)
# tmpfile3=$(mktemp)

# cat <<END > $tmpfile1

#   <script>
#     dataLayer = [{
#       'crew_id': '{{ session('crewId') }}',
#       'crew_emp_type': '{{ session('emp_typ') }}',
#       'store_site_cd': '{{ session('site_cd') }}',
#       'store_nm': '{{ session('orgnz_nm_kj') }}',
#       'store_type': '{{ session('dctmng_fc_typ') }}',
#       'store_trasate_type': '{{ session('trd_sat_typ') }}',
#       'fc_name': '{{ session('company_nm') }}',
#     }];
#   </script>

#   {{--Google Tag Manager--}}
#   <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-NFHDT3H');</script>

# END

# cat <<END > $tmpfile2

# {{--Google Tag Manager (noscript)--}}
# <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NFHDT3H" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

# END

# cat dist/index.html | \
# ${SED} "/<title>/r ${tmpfile1}" | \
# ${SED} "/<body>/r ${tmpfile2}" > ${tmpfile3}

# #
# # delete dist/index.html
# #

# rm dist/index.html

# #
# # copy blade file
# #

# cp -p ${tmpfile3} $CORE_DIR/resources/views/pos/index.blade.php

# #
# # copy dist dirs
# #

# rm -rf $CORE_DIR/public/pos
# cp -pr ./dist $CORE_DIR/public/pos

# #
# # delete temporary files
# #

# rm -f ${tmpfile1}
# rm -f ${tmpfile2}
# rm -f ${tmpfile3}

# #
# # support message
# #

# COMMIT_HASH=`git show -s --format=%H`

# cat <<EOT

# # コミット用コマンド

# cd $CORE_DIR
# git add public/pos resources/views/pos/index.blade.php
# git commit -m 'pos最新化($COMMIT_HASH)'

# EOT
