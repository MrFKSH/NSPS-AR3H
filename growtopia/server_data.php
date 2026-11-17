<?php
header('Content-Type: text/plain; charset=utf-8');
header('Cache-Control: no-cache, no-store, must-revalidate');

$server_ip   = "134.209.100.230";
$server_port = "55000";
$login_url   = "nuvurl.vercel.app";

echo "server|{$server_ip}\n";
echo "port|{$server_port}\n";
echo "type|1\n";
echo "type2|1\n";
echo "loginurl|{$login_url}\n";
echo "#maint|`5Server is currently at maintenance.\n";
echo "meta|nusaps\n";
echo "RTENDMARKERBS1001\n";
?>
